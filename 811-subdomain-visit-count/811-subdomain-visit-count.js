/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const counts = {}; // domain: count
    for (let cpdomain of cpdomains) {
        const [count, domain] = cpdomain.split(" ");
        const subdomains = domain.split(".");
        let sub = "";
        for (let i=subdomains.length-1; i>=0; i--) {
            if (i !== subdomains.length-1) {
                sub = '.' + sub;
            }
            sub = subdomains[i] + sub;
            if (!(sub in counts)) counts[sub] = 0;
            counts[sub] += Number(count);
        }
    }
    const res = [];
    for (let sub in counts) {
        res.push(counts[sub] + ' ' + sub);
    }
    return res; 
};