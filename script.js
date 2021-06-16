document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    //The above buttons arre returned in an array, so we need to iterate over that array

    for(let button of buttons) {
      button.addEventListener("click", function() {
          if(this.getAttribute('data-type') == "submit") {
              alert("You clicked submit!, Well done")
          } else {
              let gameType = this.getAttribute("data-type");
              alert(`You just clicked the ${gameType} button, well done.`);
          }
      })
    }
})

function runGame() {
//Generate two random numbers
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

