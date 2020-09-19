function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}

function sudokuSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
                data[i][j] = `${k}`;
                document.getElementById(i+':'+j).value = `${k}`;
                if (sudokuSolver(data)) {
                    return true;
                } else {
                    data[i][j] = '';
                    document.getElementById(i+':'+j).value = ``;
                }
         }
       }
       return false;
     }
   }
 }
 return true;
}




function checkBoard(data, row, col, k) {
    for(var i = 0; i < 9; i++) {
        var offset = (Math.floor(col/3)*9)*Math.floor(row/3);
        console.log(data[(i+offset)%3][Math.floor((i+offset)/3)])
        if(data[(i+offset)%3][Math.floor((i+offset)/3)] == k) {
            return false;
        }
        if(data[i][col] == k || data[row][i] == k) {
            return false;
        }
    }
    return true;
}

async function sudokuSolver(data) {
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            if(data[i][j] == '') {
                for(var k = 1; k <= 9; k++) {
                    await wait(50);
                    document.getElementById(i+':'+j).value = `${k}`;
                    if(checkBoard(data, i, j, k)) {
                        data[i][j] = `${k}`;
                        document.getElementById(i+':'+j).value = `${k}`;
                        if(sudokuSolver(data)) {
                            return true;
                        } else {
                            data[i][j] = '';
                            document.getElementById(i+':'+j).value = '';
                        }
                    }
                }
                console.log('false')
                return false;
            }
        }
    }
    return true;
}