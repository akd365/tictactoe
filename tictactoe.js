let nowturn = "X";
var gameboard = Array(9).fill(0);
const tile=9
const wincondn =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function nextTurn() {
    if(nowturn=="X"){
        nowturn="O";
    }
    else if(nowturn=="O"){
        nowturn="X";
    }
    else{}
}
function fill(n){
    if(gameboard[n]!=0){
        return;
    }
    gameboard[n]=nowturn;
    document.getElementById(n).innerHTML = nowturn;
    console.log(gameboard);
    console.log(nowturn);
    nextTurn();
    win();
}
function value(i){
    return document.getElementById(i).innerHTML;
}
function wincase(x,y,z){
    if(value(x)==value(y) && value(y)==value(z)){
        return true;
    }
}
function win(){
    if(wincase(0,1,2)==true){
        if(value(0)=="X"){
        document.getElementById("messege").innerHTML="X won the game"}
        if(value(0)=="O"){
            document.getElementById("messege").innerHTML="O won the game"}
    }
    if(wincase(3,4,5)==true){
        if(value(3)=="X"){
            document.getElementById("messege").innerHTML="X won the game"}
            if(value(3)=="O"){
                document.getElementById("messege").innerHTML="O won the game"}
    }
    if(wincase(6,7,8)==true){
        if(value(6)=="X"){
            document.getElementById("messege").innerHTML="X won the game"}
            if(value(6)=="O"){
                document.getElementById("messege").innerHTML="O won the game"}
    }
    if(wincase(0,3,6)==true){
        if(value(0)=="X"){
            document.getElementById("messege").innerHTML="X won the game"}
            if(value(0)=="O"){
                document.getElementById("messege").innerHTML="O won the game"}
    }
    if(wincase(1,4,7)==true){
        if(value(1)=="X"){
            document.getElementById("messege").innerHTML="X won the game"}
            if(value(1)=="O"){
                document.getElementById("messege").innerHTML="O won the game"}
    }
    if(wincase(2,5,8)==true){
        if(value(2)=="X"){
            document.getElementById("messege").innerHTML="X won the game"}
            if(value(2)=="O"){
                document.getElementById("messege").innerHTML="O won the game"}

    }
    if(wincase(0,4,8)==true){
        if(value(0)=="X"){
            document.getElementById("messege").innerHTML="X won the game"}
            if(value(0)=="O"){
                document.getElementById("messege").innerHTML="O won the game"}
    }
    if(wincase(2,4,6)==true){
        if(value(2)=="X"){
            document.getElementById("messege").innerHTML="X won the game"}
            if(value(2)=="O"){
                document.getElementById("messege").innerHTML="O won the game"}
    }
}
function reloood(){
    window.location.reload();
}