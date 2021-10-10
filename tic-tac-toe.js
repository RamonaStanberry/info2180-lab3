onload=function(){
    const Player1='X';
    const Player2= 'O';
    var game_board= document.getElementById("board").getElementsByTagName('div');
    for(let i=0;i<game_board.length;i++)
    {
        game_board[i].className+=('square');
    }
    document.getElementById("board").getElementsByTagName('div').className+=('X');
    document.getElementById("board").getElementsByTagName('div').className+=('O');
}