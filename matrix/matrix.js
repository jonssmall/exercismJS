var Matrix = function(input) {
    var stringRows = input.split('\n'); //["1 2", "10 20"]
    var rows = [];
    var columns = [];
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

    return {
        rows: rows,
        columns: columns
    };
};


module.exports = Matrix;