document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    //The above buttons arre returned in an array, so we need to iterate over that array

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute('data-type') == "submit") {
                checkAnswer();
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
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting!!!`
    }
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

