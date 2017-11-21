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
const block = {
  height: 100,
  width: 10,
  step: 10,
  xPosLeft: 20,
  yPosLeft: canvas.height / 2 - 50,
  xPosRight: canvas.width - 20,
  yPosRight: canvas.height / 2 - 50
};

document.addEventListener('keydown', (ev) => {
  console.log(ev.keyCode);
  switch (ev.keyCode) {
    case 87:
      block.yPosLeft -= block.yPosLeft > 0 ? block.step : 0;
      break;
    case 83:
      block.yPosLeft += block.yPosLeft + block.height < canvas.height ?
        block.step : 0;
      break;
    case 38:
      block.yPosRight -= block.yPosRight > 0 ? block.step : 0;
      break;
    case 40:
      block.yPosRight += block.yPosRight + block.height < canvas.height ?
        block.step : 0;
      break;
  }
});

requestAnimationFrame(draw);

function draw() {
  canvasContext.fillStyle = '#000';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  moveBall(ball);
  drawBall(ball.xPos, ball.yPos);
  drawBlock(block,  true);
  drawBlock(block,  false);

  requestAnimationFrame(draw);
}

function drawBall(xPos, yPos) {
  canvasContext.fillStyle = '#fff';
  canvasContext.beginPath();
  canvasContext.arc(xPos, yPos, 10, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function drawBlock(blockObj, isLeft) {
  canvasContext.fillStyle = 'CEFFF5';
  canvasContext.fillRect(
    blockObj[isLeft ? 'xPosLeft' : 'xPosRight'],
    blockObj[isLeft ? 'yPosLeft' : 'yPosRight'],
    blockObj.width,
    blockObj.height
  );
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
