/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n, record="", absences=0, memo=new Map()) {
    const MOD = Math.pow(10, 9) + 7;
    let p = 1;  // no A, not ends with L
    let l = 0;  // no A, ends with L
    let ll = 0; // no A, ends with LL
    let a = 0;  // 1 A, not ends with L
    let al = 0; // 1 A, ends with L
    let all = 0;  // 1 A, ends with L

    while (n--) {
        [p, a, l, ll, al, all] = [
          (p + l + ll) % MOD, 
          (a + al + p + l + ll + all) % MOD, 
          p % MOD, 
          l % MOD, 
          a % MOD, 
          al % MOD
        ];
    }

      return (p+a+l+ll+al+all)%MOD;
};