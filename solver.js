function wait(milliseconds) {
    if(milliseconds == 0) {
        return true;
    }
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function checkBoard(data, row, col, k) {
    for(var i = 0; i < 9; i++) {
        if(data[i][col] == k || data[row][i] == k || data[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i%3] == k) {
            return false;
        }
    }
    return true;
}

async function sudokuSolver(data, time) {
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(data[i][j] == '') {
                for(let k = 1; k <= 9; k++) {
                    if(await checkBoard(data, i, j, k)) {
                        data[i][j] = `${k}`;
                        await wait(time);
                        document.getElementById(i+':'+j).value = `${k}`;
                        if(await sudokuSolver(data, time)) {
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

function start() {
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            _board[i][j] = document.getElementById(i+':'+j).value;
        };
    }; 
    var time = document.getElementById('timeMs').value;
    sudokuSolver(_board, time);
};


function renderBoard() {
    var htmlifiedBoard = "";
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            htmlifiedBoard += '<input type="text" id="' + i + ':' + j + '" value="' + _board[i][j] + '" oninput="checkboardAfterInput(this)">';
            if(j == 8) {
                htmlifiedBoard += '<br>';
                if(i%3 == 2) {
                    htmlifiedBoard += '<br>';
                }
            }
            if(j%3 == 2) {
                htmlifiedBoard += ' ';
            }
        };
    };
    document.getElementById('grid').innerHTML = htmlifiedBoard;
}


createBoard();
