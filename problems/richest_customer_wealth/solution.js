/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = 0;
    
    for (customer of accounts) {
        const wealth = customer.reduce((p,c) => p + c)
        if (richest < wealth) {
            richest = wealth;
        }
    }
    
    return richest
};