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
    var game_state=[];
    let this_player= p2;

    for(let i=0;i<=8;i++){
        allSquares[i].addEventListener('click',function(){
            if(this_player===p1 && allSquares[i].textContent===''){
                this_player=p2;
                document.getElementById('board').getElementsByTagName('div')[i].className+=(' O');
            }
            else if(this_player===p2 && allSquares[i].textContent==='') {
                this_player=p1;
                document.getElementById('board').getElementsByTagName('div')[i].className+=(' X');
            }
            game_state.push(allSquares[i].innerHTML=this_player);
            //console.log('clicked')
        })
        
        allSquares[i].addEventListener("mouseover", event => {
            allSquares[i].className+=(' hover');
        });
        allSquares[i].addEventListener("mouseleave", event => {
            allSquares[i].classList.remove('hover');
        });
    }



}   