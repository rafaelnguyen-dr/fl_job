import price = require('crypto-price');

export const getCryptoPrice = async (crypto, base = 'USD') => {
  const cryptoPrice = await price.getCryptoPrice(base, crypto);
  return cryptoPrice?.price || 0;
};
