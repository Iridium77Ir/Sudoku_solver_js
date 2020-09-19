function clearBoard() {
    _board = [];
    for(var i = 0; i < 9; i++) {
        _board.push(['', '', '', '', '', '', '', '', '']);
    };
    renderBoard();
}

function createBoard() {
    clearBoard();
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            var should = Math.floor(Math.random()*4);
            if(should == 3) {
                var num = Math.floor(Math.random()*9);
                if(checkBoard(_board, i, j, num)) {
                    _board[i][j] = num;
                }
            }
        }
    };
    renderBoard();
}