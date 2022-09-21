/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxDifference = 0;
    let minPrice = prices[0];
      
    for (let i = 0; i < prices.length; i++) {
        const difference = prices[i] - minPrice;
        if (difference > maxDifference) {
            maxDifference = difference;
        } 
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
      
    return maxDifference;
};