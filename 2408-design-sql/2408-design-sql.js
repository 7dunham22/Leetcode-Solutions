/**
 * @param {string[]} names
 * @param {number[]} columns
 */
var SQL = function(names, columns) {
    this.sql = {};
    for (let i=0; i<names.length; i++) {
        const name = names[i];
        this.sql[name] = [new Array(columns[i]).fill(null).map(x => null)];
    }
};

/** 
 * @param {string} name 
 * @param {string[]} row
 * @return {void}
 */
SQL.prototype.insertRow = function(name, row) {
    const table = this.sql[name];
    const newId = table.length;
    table[newId] = row;
    this.sql[name] = table;
};

/** 
 * @param {string} name 
 * @param {number} rowId
 * @return {void}
 */
SQL.prototype.deleteRow = function(name, rowId) {
    const table = this.sql[name];
    table[rowId] = new Array(table[0].length).fill(null).map(x => null);
    this.sql[name] = table;
};

/** 
 * @param {string} name 
 * @param {number} rowId 
 * @param {number} columnId
 * @return {string}
 */
SQL.prototype.selectCell = function(name, rowId, columnId) {
    const table = this.sql[name];
    return table[rowId][columnId-1];
};

/** 
 * Your SQL object will be instantiated and called as such:
 * var obj = new SQL(names, columns)
 * obj.insertRow(name,row)
 * obj.deleteRow(name,rowId)
 * var param_3 = obj.selectCell(name,rowId,columnId)
 */