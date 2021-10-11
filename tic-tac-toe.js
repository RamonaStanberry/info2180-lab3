function boardLayout(game_board){
    for(let i=0;i<game_board.children.length;i++)
    {
        game_board.children[i].className+=('square');
    }
}
function whoWins(array){
    var stats=document.getElementById('status');

    winning_positions=[ 
              [0, 1, 2], 
              [3, 4, 5],
              [6, 7, 8], 
              [0, 3, 6],
              [1, 4, 7], 
              [2, 5, 8],
              [0, 4, 8], 
              [2, 4, 6]
              ]

    for(let i of winning_positions){
        if(array[i[0]]=='X' && array[i[1]]=='X' && array[i[2]]=='X'){
            stats.className+=" you-won";
            stats.innerHTML="Congratulations! X is the Winner!"
        }
        else if(array[i[0]]=='O' && array[i[1]]=='O' && array[i[2]]=='O'){
            stats.className+=" you-won";
            stats.innerHTML="Congratulations! O is the Winner!"  
        }
    }
}


onload=function(){
    var gBoard= document.getElementById("board");
    boardLayout(gBoard); 
    var allSquares=document.querySelectorAll('.square');
    const p1='X';
    const p2='O';
    var game_state=[];
    let this_player= p2;

    for(let i=0;i<=8;i++){
        allSquares[i].addEventListener('click',function(){
            if(this_player===p1 && allSquares[i].textContent===''){
                allSquares[i].innerHTML='O'
                this_player=p2;
                document.getElementById('board').getElementsByTagName('div')[i].className+=(' O');
                game_state[i]='O'
            }
            else if(this_player===p2 && allSquares[i].textContent==='') {
                allSquares[i].innerHTML='X'
                this_player=p1;
                document.getElementById('board').getElementsByTagName('div')[i].className+=(' X');
                game_state[i]='X'
            }
            whoWins(game_state)
           
        })
        
        allSquares[i].addEventListener("mouseover", event => {
            allSquares[i].className+=(' hover');
        });
        allSquares[i].addEventListener("mouseleave", event => {
            allSquares[i].classList.remove('hover');
        });
    }



}   