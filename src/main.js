import './style/canvas.css';

document.addEventListener('DOMContentLoaded', () => {
  const coordContainer = document.getElementById('coordInfo');
  const canvas = document.getElementById('canv');
  const context = canvas.getContext('2d');

  context.strokeStyle = '#006400';
  context.fillStyle = '#94a83e';
  context.lineWidth = 3;

  context.beginPath();
  context.arc(281, 281, 100, Math.PI / 180 * 45, Math.PI / 180 * 315, false);
  context.lineTo(281, 281);
  context.closePath();

  context.fill();
  context.stroke();

  canvas.addEventListener('mousemove', (e) => {
    // const coordBox = coordContainer.getBoundingClientRect();
    coordContainer.innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
  });
});
