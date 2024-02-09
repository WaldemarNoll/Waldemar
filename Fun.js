const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const PlayerPoints = document.querySelector("#PlayerPoints")
const ComputerPoints = document.querySelector("#ComputerPoints")

const choiceButton = document.querySelectorAll(".choiceButton");
const buttons = document.querySelectorAll('.choiceButton');

function setSVGSize(svgElement, width, height) {
    svgElement.setAttribute('width', width);
    svgElement.setAttribute('height', height);
}

var rockSVG = document.querySelector('.svgRock svg');
var paperSVG = document.querySelector('.svgPaper svg');
var scissorsSVG = document.querySelector('.svgScissors svg');

var CrockSVG = document.querySelector('.CsvgRock svg');
var CpaperSVG = document.querySelector('.CsvgPaper svg');
var CscissorsSVG = document.querySelector('.CsvgScissors svg');

let Pcounter = 0;
let Ccounter = 0;
let State;

let player;
let computer;
let result;

document.addEventListener('DOMContentLoaded', function() {
    showPopup();
    document.getElementById('close-popup').addEventListener('click', function() {
        closePopup();
    });
});

function showPopup() {
    document.getElementById('popup-container').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
}

var svgPaper = document.querySelector('.svgPaper');
setSVGSize(svgPaper, '60px', '60px');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const currentButton = event.currentTarget;
        currentButton.classList.add('clicked');

        currentButton.addEventListener('animationend', () => {
            currentButton.classList.remove('clicked');
        }, { once: true });

        setTimeout(() => {
            currentButton.classList.remove('clicked');
        }, 1000);
    });
});

choiceButton.forEach(button => button.addEventListener("click", () => {

    setSVGSize(rockSVG, '0px', '0px');
    setSVGSize(paperSVG, '0px', '0px');
    setSVGSize(scissorsSVG, '0px', '0px');

    setSVGSize(CrockSVG, '0px', '0px');
    setSVGSize(CpaperSVG, '0px', '0px');
    setSVGSize(CscissorsSVG, '0px', '0px');

    player = button.textContent;
    computerTurn();

    State = checkWinner();
    
    resultText.textContent = State;
    
    if (State === "You Win!"){
        Pcounter += 1;
    }
    else if (State === "You Lose!") {
        Ccounter += 1;
    }
    
    if(player === "Rock") {
        setSVGSize(rockSVG, '60%', '60%');
    }
    else if (player === "Paper") {
        setSVGSize(paperSVG, '60%', '60%');
    }
    else {
        setSVGSize(scissorsSVG, '60%', '60%');
    }

    
    if (computer === "Rock") {
        setSVGSize(CrockSVG, '70%', '70%');

    } else if (computer === "Paper") {
        setSVGSize(CpaperSVG, '70%', '70%');

    } else {
        setSVGSize(CscissorsSVG, '70%', '70%');

    }


    PlayerPoints.textContent = `Player Points: ${Pcounter}`;
    ComputerPoints.textContent = `Computer Points: ${Ccounter}`;

    if (Pcounter === 3) {
        PlayerPoints.textContent = `Player Wins Git Loses!`;
        ComputerPoints.textContent = `Player Wins Git Loses!`;
        Pcounter = 0;
        Ccounter = 0;
    }
    else if (Ccounter === 3) {
        ComputerPoints.textContent = `Git Wins Player Loses!`;
        PlayerPoints.textContent = `Git Wins Player Loses!`;
        Pcounter = 0;
        Ccounter = 0;
    }
}));



function computerTurn() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber){
        case 1:
            computer = "Rock";
            break
        case 2:
            computer = "Paper";
            break
        case 3:
            computer = "Scissors";
            break
    }
}

function checkWinner() {

    if (player === computer) {
      return "Draw!";
    } else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "You Win!";
    } else {
      return "You Lose!";
    }
}

//##################################################################################

document.addEventListener('DOMContentLoaded', function() {
    var navbarUl = document.querySelector('nav');
    var blurElement = document.querySelector('.blur');

    navbarUl.addEventListener('mouseover', function() {
        blurElement.style.opacity = '1';
    });

    navbarUl.addEventListener('mouseout', function() {
        blurElement.style.opacity = '0';
    });
});