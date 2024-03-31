const images=["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
let result1=Math.floor(Math.random() * (6)) ;
let result2=Math.floor(Math.random() * (6)) ;
//alert(result);
document.querySelector(".img1").setAttribute("src",images[result1]);
document.querySelector(".img2").setAttribute("src",images[result2]);

if(result1>result2){
  document.querySelector("h1").innerHTML="PLayer 1 wins💫";
}

else if(result2>result1){
  document.querySelector("h1").innerHTML="PLayer 2 wins💫";
}

else{
  document.querySelector("h1").innerHTML="It is a draw";
}