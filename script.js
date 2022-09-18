"use strict";
/*console.log(document.querySelector(".message").textContent);
document.querySelector(".secretnumber").textContent = 8;
document.querySelector(".score").textContent = 15;
document.querySelector(".highest").textContent = 15;
document.querySelector(".input1").value = 3;
*/
const secretNumber1 = Math.trunc(Math.random() * 20) + 1;
let scoree = 20;


document.querySelector(".secretnumber").textContent = secretNumber1;
document.querySelector(".btn-again")
document.querySelector(".btn-check",".btn-again").addEventListener("click", function () {
  let guess1 = Number(document.querySelector(".input1").value);


  if (!guess1) {
    document.querySelector(".message").textContent = "no number entered";
  } else if(scoree <1){
    document.querySelector(".message").textContent = "lose";
    
  } else if (secretNumber1 === guess1) {
    document.querySelector(".message").textContent = "correct number";

    document.querySelector("body").style.backgroundColor ="#60b247";
  } else if (secretNumber1 < guess1) {
    document.querySelector(".message").textContent = "number is too high";
    scoree = scoree - 1;
  } else if (secretNumber1 > guess1) {
    document.querySelector(".message").textContent = "number is too low";
    scoree = scoree - 1;
  }
  document.querySelector(".score").textContent = scoree;
  console.log(scoree);
});