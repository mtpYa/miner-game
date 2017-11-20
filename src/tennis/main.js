import './../style/canvas.css';

const canvas = document.getElementsByClassName('tennis_canvas')[0];
const canvasContext = canvas.getContext('2d');
const ball = {
  stepX: 3,
  stepY: 3,
  size: 10,
  xPos: 400,
  yPos: 100
};

requestAnimationFrame(draw);

function draw() {
  canvasContext.fillStyle = '#000';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  moveBall(ball);
  drawBall(ball.xPos, ball.yPos);

  requestAnimationFrame(draw);
}

function drawBall(xPos, yPos) {
  canvasContext.fillStyle = '#fff';
  canvasContext.beginPath();
  canvasContext.arc(xPos, yPos, 10, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function moveBall(ballObj) {
  if (ballObj.xPos >= canvas.width - (ballObj.size / 2) ||
    ballObj.xPos <= ballObj.size / 2) {
    ballObj.stepX *= -1;
  }
  if (ballObj.yPos >= canvas.height - (ballObj.size / 2) ||
    ballObj.yPos <= ballObj.size / 2) {
    ballObj.stepY *= -1;
  }

  ballObj.xPos += ballObj.stepX;
  ballObj.yPos += ballObj.stepY;
}
