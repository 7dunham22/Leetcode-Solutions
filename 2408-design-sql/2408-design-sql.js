/**
 * @param {string[]} names
 * @param {number[]} columns
 */
var SQL = function(names, columns) {
    this.sql = {};
    for (const name of names) {
        this.sql[name] = {rows: {}, id: 1};
    }
};

/** 
 * @param {string} name 
 * @param {string[]} row
 * @return {void}
 */
SQL.prototype.insertRow = function(name, row) {
    const table = this.sql[name];
    table.rows[table.id] = row;
    table.id += 1;
    this.sql[name] = table;
};

/** 
 * @param {string} name 
 * @param {number} rowId
 * @return {void}
 */
SQL.prototype.deleteRow = function(name, rowId) {
    const table = this.sql[name];
    table.rows[rowId] = null;
    this.sql[name] = table;
};

/** 
 * @param {string} name 
 * @param {number} rowId 
 * @param {number} columnId
 * @return {string}
 */
SQL.prototype.selectCell = function(name, rowId, columnId) {
    return this.sql[name].rows[rowId][columnId-1];
};

/** 
 * Your SQL object will be instantiated and called as such:
 * var obj = new SQL(names, columns)
 * obj.insertRow(name,row)
 * obj.deleteRow(name,rowId)
 * var param_3 = obj.selectCell(name,rowId,columnId)
 */