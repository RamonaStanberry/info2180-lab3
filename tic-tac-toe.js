function boardLayout(game_board){
    for(let i=0;i<game_board.children.length;i++)
    {
        game_board.children[i].className+=('square');
    }
}


onload=function(){
    var gBoard= document.getElementById("board");
    boardLayout(gBoard);
}