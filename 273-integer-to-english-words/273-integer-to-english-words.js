/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    const dict = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
        20: 'Twenty',
        30: 'Thirty',
        40: 'Forty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninety'
    };
    
    const convert = (num) => {
        let res = "";
        const hundreds = Math.floor(num / 100);
        if (hundreds !== 0) {
            res += dict[hundreds] + " Hundred";
        }
        
        const base = num % 100;
        if (num >= 100 && base === 0) return res;
        if (res.length > 0) res += " ";
        if (base < 20) {
            res += dict[base];
        } else {
            res += dict[Math.floor(base/10) * 10];
            if (base % 10 !== 0) {
                res += " ";
                res += dict[base % 10];   
            }
        }
        
        return res;
    }
    
    let res = "";
    const comps = [];
    if (num === 0) comps.push(0);
    while (num > 0) {
        if (num >= 1000) {
            comps.push(num % 1000);
        } else {
            comps.push(num);
        }
        num = Math.floor(num / 1000);
    } 
    
    const underThousand = comps.shift();
    if (underThousand !== null) {
        res += convert(underThousand);
    }
    
    const underMillion = comps.shift();
    if (underMillion) {
        if (res === 'Zero') res = "";
        res = convert(underMillion) + " Thousand " + res;
        res = res.trim();
    }
    
    const underBillion = comps.shift();
    if (underBillion) {
        if (res === 'Zero') res = "";
        res = convert(underBillion) + " Million " + res;
        res = res.trim();
    }
    
    const underTrillion = comps.shift();
    if (underTrillion) {
        if (res === 'Zero') res = "";
        res = convert(underTrillion) + " Billion " + res;
        res = res.trim();
    }
    
    return res;
};