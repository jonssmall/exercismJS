var Triangle = function(rowCount) {
    var triangleRows = [];

    for (var i = 1; i <= rowCount; i++) {
        var row = [];
        row[0] = 1; //leftmost 1
        for(var j = 1; j < i - 1; j++) {            
            row[j] = triangleRows[i - 2][j-1] + triangleRows[i - 2][j];            
        }
        row[i -1] = 1; //rightmost 1
        triangleRows.push(row);
    }

    return {
        rows: triangleRows,
        lastRow: triangleRows[triangleRows.length - 1] 
    };
};


module.exports = Triangle;