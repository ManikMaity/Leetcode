function maxProfit(prices: number[]): number {
  let buyIndex = 0;
  let maxProfit = 0;
  for (let sellIndex = 1; sellIndex < prices.length; sellIndex++) {
    prices[sellIndex] > prices[buyIndex]
      ? (maxProfit = Math.max(maxProfit, prices[sellIndex] - prices[buyIndex]))
      : (buyIndex = sellIndex);
  }
  return maxProfit;
}