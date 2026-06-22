function isWin(board, text) {
    // row check
    if (board[0] == board[1] && board[1] == board[2] && board[2] == text) return text;
    else if (board[3] == board[4] && board[4] == board[5] && board[5] == text) return text;
    else if (board[6] == board[7] && board[7] == board[8] && board[8] == text) return text;

    // coloum check
    else if (board[0] == board[3] && board[3] == board[6] && board[6] == text) return text;
    else if (board[1] == board[4] && board[4] == board[7] && board[7] == text) return text;
    else if (board[2] == board[5] && board[5] == board[8] && board[8] == text) return text;

    // diagonal check
    else if (board[0] == board[4] && board[4] == board[8] && board[8] == text) return text;
    else if (board[2] == board[4] && board[4] == board[6] && board[6] == text) return text;
    else if (check()) return "draw";
    else return "";
    function check(){
        let count = 0;
        board.forEach(element => {
            if(element!="") count++;
        });
        if(count==9) return true;
        else false;
    }
}
export default isWin