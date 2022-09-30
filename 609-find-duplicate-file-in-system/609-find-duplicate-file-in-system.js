/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let duplicates = [];
    const contents = [];
    
    const dfs = (path) => {
        const [dir, ...files] = path.split(" ");
        for (const file of files) {
            const l = file.indexOf('(');
            const r = file.indexOf(')');
            const content = file.slice(l+1, r);
            const index = contents.indexOf(content);
            if (index === -1) {
                contents.push(content);
                duplicates.push([dir + '/' + file.slice(0, l)]);
            } else {
                duplicates[index].push(dir + '/' + file.slice(0, l));
            }
        }
    }
    
    for (const path of paths) {
        dfs(path);
    }
    duplicates = duplicates.filter(group => group.length > 1);
    return duplicates;
};