/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    const minHeights = new Array(books.length+1).fill(0);
    for (let i=0; i<books.length; i++) {
        let [curWidth, curHeight] = books[i];
        minHeights[i+1] = minHeights[i] + curHeight;
        for (let book=i-1; book>=0; book--) {
            if (curWidth + books[book][0] > shelfWidth) {
                break;
            }
            curWidth += books[book][0];
            curHeight = Math.max(curHeight, books[book][1]);
            minHeights[i+1] = Math.min(minHeights[i+1], minHeights[book] + curHeight);
        }
    }
    return minHeights[books.length];
};