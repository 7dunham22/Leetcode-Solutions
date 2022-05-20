/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort((a,b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    });
    const results = [];
    for (let i=1; i<=searchWord.length; i++) {
        let search = searchWord.slice(0, i);
        let result = products.filter(product => product.indexOf(search) === 0);
        if (result.length > 3) {
            result = result.slice(0,3);
        }
        results.push(result);
    }
    return results;
};