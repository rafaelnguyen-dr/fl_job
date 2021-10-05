import { NestFactory } from '@nestjs/core';
import RootModule from 'src/RootModule';
import exchange from 'exchanges';

// services
import { UsersService } from 'src/users/users.service';
import { UserOrdersService } from 'src/user-orders/user-orders.service';
import { UserExchangeKeysService } from 'src/user-exchange-keys/user-exchange-keys.service';

// types
import { Order, User, UserExchangeKey } from 'resources';

export async function run() {
  const app = await NestFactory.createApplicationContext(RootModule);
  const userService = app.get(UsersService);
  const exchangeKeyService = app.get(UserExchangeKeysService);
  const userOrdersService = app.get(UserOrdersService);
  const { AVAILABLE_EXCHANGES, symbols, Exchange } = exchange;

  try {
    // get all leaders
    const leaders = await userService.findAllLeaders();

    // get all exchange keys of leaders
    const exchangeKeys = await Promise.all(
      leaders.map(async (leader: User) => {
        const { id } = leader;
        for (let idx = 0; idx < AVAILABLE_EXCHANGES.length; idx++) {
          const exchangeName = AVAILABLE_EXCHANGES[idx];
          const conditions = {
            user_id: id,
            status: true,
            is_selected: true,
            exchange: exchangeName,
          };
          const exchangeKey = await exchangeKeyService.findExchangeKey(
            conditions,
          );
          return exchangeKey;
        }
      }),
    ).then((keys) => keys.filter(Boolean));

    // get all orders of leaders
    // TODO: update later when integration with proxy is done
    let allOrders = await Promise.all(
      exchangeKeys.map(async (exchangeKey: UserExchangeKey) => {
        const { exchange, key, secret_key, created_at, user_id } = exchangeKey;
        const since = new Date(created_at).getTime();
        const exchangeInstance = new Exchange(exchange, key, secret_key);
        const orders = [];

        // TODO: need to investigate again, can't loop through all symbols
        for (const symbol of symbols) {
          const symbolOrders = await exchangeInstance.getOrders(symbol, since);
          if (symbolOrders.length > 0) {
            orders.push(
              ...symbolOrders.map((order) => ({ ...order, user_id, exchange })),
            );
          }
        }
        return orders;
      }),
    );

    // convert to array
    allOrders = allOrders.reduce(
      (acc: Order[], curr: Order[]) => acc.concat(curr),
      [],
    );

    // filter unsaved orders
    const unsavedOrders = await Promise.all(
      allOrders.map(async (order) => {
        const { id } = order as any;
        const dbOrder = await userOrdersService.findByOrderId(id);
        if (!dbOrder) {
          return order;
        }
      }),
    ).then((orders) => orders.filter(Boolean));

    // save unsaved orders to db
    // TODO: Update order schema later
    await Promise.all(
      unsavedOrders.map(async (order) => {
        const {
          id,
          symbol,
          side,
          type,
          price,
          amount,
          status,
          datetime,
          user_id,
          exchange,
        } = order as any;

        const userOrder: Order = {
          order_id: id,
          user_id,
          symbol,
          side,
          type,
          price,
          amount,
          status,
          datetime,
          exchange_name: exchange,
          is_processed: false,
          created_at: new Date(),
          updated_at: new Date(),
        };
        await userOrdersService.saveNewOrder(userOrder);
      }),
    );
  } catch (error) {
    console.log('error: ', error);
  }
}
