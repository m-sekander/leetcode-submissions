/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const result = [[1], [1,1]];
    
    if (rowIndex === 1) {
        return result[1];
    }
    if (rowIndex === 0) {
        return result[0];
    }
    
    for (let i=2; i<=rowIndex; i++) {
        const newRow = [1];
        for (let j=0; j<=result[i-1].length-2; j++) {
            newRow.push(result[i-1][j] + result[i-1][j+1]);
        }
        newRow.push(1);
        result.push(newRow);
    }
    
    return result[rowIndex];
};