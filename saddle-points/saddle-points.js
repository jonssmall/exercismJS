var Matrix = function(input) {
    var stringRows = input.split('\n'); //["1 2", "10 20"]
    var rows = [];
    var columns = [];
    var saddlePoints = [];
    for(var i = 0; i < stringRows[0].length; i++) {
        columns.push([]);
    }

    for(var i = 0; i < stringRows.length; i++) { //"1 2"
        var stringRow = stringRows[i];
        var intRow = [];        
        stringRow.split(' ').map(function(e) { //["1", "2"].each
            intRow.push(parseInt(e)); // 1  
            columns[stringRow.split(' ').indexOf(e)].push(parseInt(e));      
        });
        rows.push(intRow);
    }   

    for(var i = 0; i < rows.length; i++) {
        var row = rows[i];
        for(var j = 0; j < row.length; j++) {
            var value = row[j];
            if (value == Math.max.apply(Math, row)) { //greater than or equal to highest value in row
                var column = columns[j];
                if(value == Math.min.apply(Math, column)) { //less than or equal to lowest value in column
                    saddlePoints.push([i,j]);
                } 
            }
        }
    }
    return {
        rows: rows,
        columns: columns,
        saddlePoints: saddlePoints
    };
};


module.exports = Matrix;