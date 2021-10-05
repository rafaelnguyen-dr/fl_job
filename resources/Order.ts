export type TOrderSide = 'buy' | 'sell';

export type TOrderType =
  | 'limit'
  | 'market'
  | 'stop_limit'
  | 'stop_market'
  | 'trailing_stop';

export type TOrderStatus = 'open' | 'closed' | 'canceled' | 'expired';

export type Order = {
  user_id: string;
  order_id: number;
  exchange_name: string;
  amount: number;
  price: number;
  side: TOrderSide;
  type: TOrderType;
  datetime: Date;
  symbol: string;
  status: TOrderStatus;
  is_processed: boolean;
  created_at: Date;
  updated_at: Date;
};
