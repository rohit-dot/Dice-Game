var p1=Math.ceil(Math.random()*6);
var p2=Math.ceil(Math.random()*6);
var ran="dice" + p1 +".png";
var img="images/" + ran;
var ran2="dice" + p2 +".png";
var img2="images/" + ran2;

var image1=document.getElementById("img1");
image1.setAttribute("src", img);

var image2=document.getElementById("img2");
image2.setAttribute("src", img2);



if(p1>p2)
{
    document.getElementById("h2").innerHTML="🚩Player 1 is winner";
    document.querySelectorAll("h3")[0].innerHTML="Player 1 💪"

}
else if(p1<p2)
{
    document.getElementById("h2").innerHTML="Player 2 is winner🚩";
    document.querySelectorAll("h3")[1].innerHTML="Player 2 💪"
}
else{
    document.getElementById("h2").innerHTML="Tie💩";
    document.querySelectorAll("h3")[1].innerHTML="Player 2 🥱"
    document.querySelectorAll("h3")[0].innerHTML="Player 1 🥱"
}

