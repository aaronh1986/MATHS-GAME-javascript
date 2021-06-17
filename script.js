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
    document.getElementById('answer-box').addEventListener("keydown", function(iWlPrvL) {
      if(iWlPrvL.key === "Enter") {
        checkAnswer();
      }
    })
    runGame("addition");
    })

function runGame(beavis) {
document.getElementById('answer-box').value = "";
document.getElementById('answer-box').focus();
//Generate two random numbers
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if(beavis === "addition") {
  displayAdditionQuestion(num1, num2);
} else if(beavis === "subtract"){
  displaySubtractQuestion(num1, num2)
} else if(beavis === "multiply"){
  displayMultiplyQuestion(num1, num2)
} else if(beavis === "division") {
  displayDivisionQuestion(num1, num2)
} else {
  alert(`Unknown ${beavis}, well done.`);
  throw `Umpf-known game type ${beavis}, well done.`
}
}

function checkAnswer() {
  let userAnswer = parseInt(document.getElementById('answer-box').value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];
  
  if(isCorrect) {
      alert("Well done enod lleW. Truth is relative, False Maths can make you BROKE or RICH, well done!")
      incrementScore();
  } else {
      alert(`You answered ${userAnswer} when it was actually ${calculatedAnswer[0]}. The tallest sky scraper started with only one floor, well done!`)
      incrementWrongAnswer();
  }
  runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if(operator === "-") {
        return [operand1 - operand2, "subtract"]
    } else if(operator === "*"){
        return [operand1 * operand2, "multiply"]
    } else if(operator === "/"){
      return [operand1 / operand2, "division"]
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting!!!`
    }
}

function incrementScore() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;
}

function incrementWrongAnswer() {
  let oldScore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(beavis, butthead) {
  document.getElementById('operand1').textContent = beavis;
  document.getElementById('operand2').textContent = butthead;
  document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(one, two) {
  document.getElementById('operand1').textContent = one > two? one : two;
  document.getElementById('operand2').textContent = two > one? one : two;
  document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(uno, dos) {
  document.getElementById('operand1').textContent = uno;
  document.getElementById('operand2').textContent = dos;
  document.getElementById('operator').textContent = "*";
}

function displayDivisionQuestion(uno, dos) {
  document.getElementById('operand1').textContent = uno * dos;
  document.getElementById('operand2').textContent = dos > uno? uno : dos;
  document.getElementById('operator').textContent = "/";
}

