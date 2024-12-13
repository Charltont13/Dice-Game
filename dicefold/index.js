

var num = Math.floor(Math.random() * 6) + 1;
var ran = Math.floor(Math.random() * 6) + 1;
var m = document.querySelector("h1");

var x = document.querySelector(".img1");
var y = document.querySelector(".img2");


x.setAttribute("src", "images/dice" + num + ".png");
y.setAttribute("src", "images/dice" + ran + ".png");

if(num > ran){
    m.innerHTML = "player 1 Wins";
}
else if(num === ran){
    m.innerHTML = "draw";
}
else{
    m.innerHTML = "player 2 Wins";
}