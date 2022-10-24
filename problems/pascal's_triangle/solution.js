/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1], [1,1]];
    
    if (numRows === 2) {
        return result;
    }
    if (numRows === 1) {
        return [result[0]];
    }
    if (numRows === 0) {
        return [];
    }
    
    for (let i=2; i<numRows; i++) {
        const newRow = [1];
        for (let j=0; j<=result[i-1].length-2; j++) {
            newRow.push(result[i-1][j] + result[i-1][j+1]);
        }
        newRow.push(1);
        result.push(newRow);
    }
    
    return result;
};