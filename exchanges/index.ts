import ccxt = require('ccxt');

const AVAILABLE_EXCHANGES = [
  'binance',
  'bitfinex',
  'bitstamp',
  'bittrex',
  'coinbase',
  'gemini',
  'ftx',
];

class Exchange {
  private exchange: ccxt.Exchange;

  constructor(
    exchangeName: string,
    apiKey: string,
    secret: string,
    proxy = process.env.PROXY_URL_TEST,
    proxies = {
      http: process.env.PROXY_URL_TEST,
      https: process.env.PROXY_URL_TEST,
    },
  ) {
    this.exchange = new ccxt[exchangeName]({
      apiKey,
      secret,
      // local proxy
      // TODO: update later
      proxy,
      proxies,
    });
  }

  async getUserBalance() {
    return this.exchange.fetchBalance();
  }

  async getOrders(symbol: string, since: number) {
    return this.exchange.fetchOrders(symbol, since);
  }

  async createOrder(
    symbol: string,
    type: string,
    side: 'buy' | 'sell',
    amount: number,
    price: number,
  ) {
    return this.exchange.createOrder(symbol, type, side, amount, price);
  }

  async getOpenOrders(symbol: string, since: number) {
    return this.exchange.fetchOpenOrders(symbol, since);
  }

  async cancelOrder(id: string) {
    return this.exchange.cancelOrder(id);
  }
}

// Update later, if all exchanges use the same symbol -> should be in constants folder
const symbols = ['BUSD/USDT', 'BAR/BUSD', 'AVA/BUSD'];

export default { Exchange, AVAILABLE_EXCHANGES, symbols };
