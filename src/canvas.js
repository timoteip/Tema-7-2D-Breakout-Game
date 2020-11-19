var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getCtx() {
  return ctx;
}

function getCanvas() {
  return canvas;
}

export { clearCanvas, getCanvas, getCtx };