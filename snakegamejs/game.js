//the import command is done correctly top1
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
// good use of const and let commnads top2
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
//not enough commnets tip 1
function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to start over.')) {
      window.location = '/'
    }
    return
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)
//always place comments of every function tip 3
function update() {
  updateSnake()
  updateFood()
  checkDeath()
}
// good use of import commnads but in my opinion is too much tip 2
function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
//code looks clean and nice top 3
