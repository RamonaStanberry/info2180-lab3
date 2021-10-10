function boardLayout(game_board){
    for(let i=0;i<game_board.children.length;i++)
    {
        game_board.children[i].className+=('square');
    }
}

onload=function(){
    var gBoard= document.getElementById("board");
    boardLayout(gBoard); 
    var allSquares=document.querySelectorAll('.square');
    const p1='X';
    const p2='O';
    var array=[];
    let this_player;

    for(let i=0;i<=8;i++){
        allSquares[i].addEventListener('click',function(){
            if(this_player===p1){
                this_player=p2;
                document.getElementById('board').getElementsByTagName('div')[i].className+=(' O');
            }
            else{
                this_player=p1;
                document.getElementById('board').getElementsByTagName('div')[i].className+=(' X');
            }
            array.push(allSquares[i].innerHTML=this_player);
            console.log('clicked')
        })

    }
}