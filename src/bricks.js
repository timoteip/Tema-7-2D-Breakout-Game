import { getCtx } from "./canvas.js";
import { getX, getY, getDy, setDy } from "./ball.js";
import { getScore, setScore } from "./score.js";

var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];

for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {
      x: 0,
      y: 0,
      status: 1,
    };
  }
}

function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        var brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        getCtx().beginPath();
        getCtx().rect(brickX, brickY, brickWidth, brickHeight);
        getCtx().fillStyle = "#0095DD";
        getCtx().fill();
        getCtx().closePath();
      }
    }
  }
}

function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status === 1) {
        if (
          getX() > b.x &&
          getX() < b.x + brickWidth &&
          getY() > b.y &&
          getY() < b.y + brickHeight
        ) {
          setDy(getDy() * -1);
          b.status = 0;
          setScore(getScore() + 1);
          if (getScore() === brickRowCount * brickColumnCount) {
            console.log("YOU WIN, CONGRATS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

export { collisionDetection, drawBricks };
