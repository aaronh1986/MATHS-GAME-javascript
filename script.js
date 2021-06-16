document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    //The above buttons arre returned in an array, so we need to iterate over that array

    for(let button of buttons) {
      button.addEventListener("click", function() {
          if(this.getAttribute('data-type') == "submit") {
              alert("You clicked submit!, Well done")
          } else {
              let gameType = this.getAttribute("data-type");
              runGame(gameType);
          }
      })
    }
    runGame("addition");
})

function runGame(beavis) {
//Generate two random numbers
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if(beavis === "addition") {
  displayAdditionQuestion(num1, num2);
} else {
  alert(`Unknown ${beavis}, well done.`);
  throw `Umpf-known game type ${beavis}, well done.`
}
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(beavis, butthead) {
  document.getElementById('operand1').textContent = beavis;
  document.getElementById('operand2').textContent = butthead;
  document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

