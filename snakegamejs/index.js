//VARIABELEN
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
//Variabelen voor snelheid, canvasgrootte, tile grootte, slanggrootte, appelgrootte.
let speed = 4;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

let headX = 10;
let headY = 10;
const snakeParts = [];
let tailLength = 2;

let appleX = 5;
let appleY = 5;

let inputsXVelocity = 0;
let inputsYVelocity = 0;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;
// Alle variabelen die ik gebruik in het bestand, & bruhSound is het geluidje die ik gebruik als er een appel word gegeten.

const bruhSound = new Audio("bruh.mp3");

//Loop game functie, als er gerefreshed word dan start het opnieuw.
function drawGame() {
  xVelocity = inputsXVelocity;
  yVelocity = inputsYVelocity;

  changeSnakePosition();
  let result = isGameOver();
  if (result) {
    return;
  }

  clearScreen();

  checkAppleCollision();
  drawApple();
  drawSnake();

  drawScore();
// Des te hoger je score = Des te hoger je speed
  if (score > 5) {
    speed = 6;
  }
  if (score > 10) {
    speed = 8;
  }
  if (score > 15) {
    speed = 10;
  }
  if (score > 20) {
    speed = 12;
  }
  if (score > 25) {
    speed = 14;
  }
  if (score > 30) {
    speed = 16;
  }
  if (score > 35) {
    speed = 18;
  }
  if (score > 40) {
    speed = 20;
  }
// 1000 gedeeld door 4 als je geen boven 5 heb etc. hoevaak je scherm refreshed in 1 seconde.
  setTimeout(drawGame, 1000 / speed);
}

function isGameOver() {
  let gameOver = false;

  if (yVelocity === 0 && xVelocity === 0) {
    return false;
  }

  //walls & collision
  if (headX < 0) {
    gameOver = true;
  } else if (headX === tileCount) {
    gameOver = true;
  } else if (headY < 0) {
    gameOver = true;
  } else if (headY === tileCount) {
    gameOver = true;
  }

  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }

  if (gameOver) {
    ctx.fillStyle = "white";
    ctx.font = "50px Verdana";

    if (gameOver) {
      ctx.fillStyle = "white";
      ctx.font = "50px Verdana";

      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop("0", "gray");
      gradient.addColorStop("0.5", "white");
      gradient.addColorStop("1.0", "gray");
      // Fill with gradient
      ctx.fillStyle = gradient;

      ctx.fillText("GAMEOVER", canvas.width / 6.5, canvas.height / 2);
    }

    ctx.fillText("GAMEOVER", canvas.width / 6.5, canvas.height / 2);
  }

  return gameOver;
}

//SCORE RECHTSBOVEN, HOUD SCORE BIJ
function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "10px Verdana";
  ctx.fillText("Score " + score, canvas.width - 50, 10);
}


function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
//Slangbody tekenen.
function drawSnake() {
  ctx.fillStyle = "white";
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new SnakePart(headX, headY)); //put an item at the end of the list next to the head
  while (snakeParts.length > tailLength) {
    snakeParts.shift(); // remove the furthest item from the snake parts if have more than our tail size.
  }

  ctx.fillStyle = "gray";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition() {
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}
//TEKENEN APPELKLEUR
function drawApple() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}


function checkAppleCollision() {
  if (appleX === headX && appleY == headY) {
    //SLANG GROTER MAKEN
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
    //Als er een appel is gegeten speelt er een gulp geluid af.
    bruhSound.play();
  }
}

document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
  //naar boven bewegen
  if (event.keyCode == 38 || event.keyCode == 87) {
    //87 is w
    if (inputsYVelocity == 1) return;
    inputsYVelocity = -1;
    inputsXVelocity = 0;
  }

  //naar beneden bewegen
  if (event.keyCode == 40 || event.keyCode == 83) {
    // 83 is s
    if (inputsYVelocity == -1) return;
    inputsYVelocity = 1;
    inputsXVelocity = 0;
  }

  //naar links bewegen
  if (event.keyCode == 37 || event.keyCode == 65) {
    // 65 is a
    if (inputsXVelocity == 1) return;
    inputsYVelocity = 0;
    inputsXVelocity = -1;
  }

  //naar rechts bewegen
  if (event.keyCode == 39 || event.keyCode == 68) {
    //68 is d
    if (inputsXVelocity == -1) return;
    inputsYVelocity = 0;
    inputsXVelocity = 1;
  }
}

drawGame();