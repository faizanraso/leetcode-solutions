function maxProfit(prices: number[]): number {
  let min = prices[0];
  let maxProfit = prices[1] - min;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }

  if (maxProfit > 0) return maxProfit;
  else return 0;
}
