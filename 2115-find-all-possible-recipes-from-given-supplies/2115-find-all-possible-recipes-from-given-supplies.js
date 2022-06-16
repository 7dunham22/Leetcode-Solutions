/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const res = [];
	const available = new Set(supplies);
	const ingredientToRecipes = {}; //Map of lacking ingredients:recipes.
	const inDegree = {}; //Map of recipes : unavailable ingr count.
	for (let i=0; i<recipes.length; i++) {
		let unavailable = 0;
        for (let ingr of ingredients[i]) {
	        if (!available.has(ingr)) {
		        if (!(ingr in ingredientToRecipes)) {
	                ingredientToRecipes[ingr] = [recipes[i]];
                } else {
	                ingredientToRecipes[ingr].push(recipes[i]);
                }
                unavailable++;
            }
        }
        if (unavailable === 0) {
	        res.push(recipes[i]);
        } else {
	        inDegree[recipes[i]] = unavailable;
        }
    }
    for (let i=0; i<res.length; i++) {
	    const recipe = res[i];
	    if (recipe in ingredientToRecipes) {
	        const lackingRecipes = ingredientToRecipes[recipe];
	        for (let rec of lackingRecipes) {
	            inDegree[rec]--;
	            if (inDegree[rec] === 0) res.push(rec);
            }
        }
    }
    return res;

};
