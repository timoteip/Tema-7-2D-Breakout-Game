import "./index.css";
import { drawBall, updateBallPosition } from "./ball.js";
import { collisionDetection, drawBricks } from "./bricks.js";
import { clearCanvas } from "./canvas.js";
import { drawLives } from "./lives.js";
import { drawPaddle, updatePaddlePosition } from "./paddle.js";
import { drawScore } from "./score.js";

function draw() {
  clearCanvas();
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  updateBallPosition();
  updatePaddlePosition();
  requestAnimationFrame(draw);
}

draw();
