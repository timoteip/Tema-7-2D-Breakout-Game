import { getCanvas, getCtx } from "./canvas.js";
import { getPaddleWidth, getPaddleX, setPaddleX } from "./paddle.js";
import { getLives, setLives } from "./lives.js";

var ballRadius = 10;
var x = getCanvas().width / 2;
var y = getCanvas().height - 30;
var dx = 2;
var dy = -2;

function drawBall() {
  getCtx().beginPath();
  getCtx().arc(x, y, ballRadius, 0, Math.PI * 2);
  getCtx().fillStyle = "#0095DD";
  getCtx().fill();
  getCtx().closePath();
}

function updateBallPosition() {
  if (x + dx > getCanvas().width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > getCanvas().height - ballRadius) {
    if (x > getPaddleX() && x < getPaddleX() + getPaddleWidth()) {
      dy = -dy;
    } else {
      setLives(getLives() - 1);
      if (getLives() == 0) {
        console.log("GAME OVER");
        document.location.reload();
        return;
      } else {
        x = getCanvas().width / 2;
        y = getCanvas().height - 30;
        dx = 3;
        dy = -3;
        setPaddleX((getCanvas().width - getPaddleWidth()) / 2);
      }
    }
  }
  x += dx;
  y += dy;
}

function getX() {
  return x;
}

function setX(number) {
  x = number;
}

function getY() {
  return y;
}

function setY(number) {
  y = number;
}

function getDx() {
  return dx;
}

function setDx(number) {
  dx = number;
}

function getDy() {
  return dy;
}

function setDy(number) {
  dy = number;
}

export {
    drawBall,
    updateBallPosition,
    getX,
    setX,
    getY,
    setY,
    getDx,
    setDx,
    getDy,
    setDy,
  };
  