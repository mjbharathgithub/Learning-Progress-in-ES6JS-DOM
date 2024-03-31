//alert("working!");
document.getElementById("heading").innerHTML="The heading have been changed successfully";
document.getElementsByName("hhh").innerHTML="Changed using elements by name";

let heading=document.createElement("h1");

heading.innerHTML="heloooooo";

document.body.appendChild(heading);


let list=document.querySelector("ul");



let li2=document.createElement("li");
li2.innerHTML="help";


list.appendChild(li2);
let btn=document.querySelector(".btn");
function typeMessage(){
  alert("Working perfect");
}
btn.addEventListener('click',typeMessage);