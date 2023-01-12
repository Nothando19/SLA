const canvas = document.getElementById('signature-canvas');
const context = canvas.getContext('2d');
const clearButton = document.getElementById('clear-button');

let isDrawing = false;
let x = 0;
let y = 0;

function draw(event) {
  if (!isDrawing) return;

  context.beginPath();
  context.moveTo(x, y);
  x = event.clientX || event.touches[0].clientX;
  y = event.clientY || event.touches[0].clientY;
  context.lineTo(x, y);
  context.stroke();
}

canvas.addEventListener('mousedown', function (event) {
  isDrawing = true;
  x = event.clientX;
  y = event.clientY;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', function () {
  isDrawing = false;
});

canvas.addEventListener('touchstart', function (event) {
  isDrawing = true;
  x = event.touches[0].clientX;
  y = event.touches[0].clientY;
});

canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', function () {
  isDrawing = false;
});

clearButton.addEventListener('click', function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

