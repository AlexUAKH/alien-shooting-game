import { Game } from "./tools/game.js";
const backdrop = document.getElementById('backdrop');
const loading = document.getElementById('loading');
const startBtn = document.getElementById('start')

window.addEventListener('load', () => {
  loading.style.display = 'none';
  startBtn.style.display = 'block';
  startBtn.addEventListener('click', () => {
    backdrop.style.display = 'none';
    animate(0);
  })

  const canvas = document.getElementById('canvas')

  const ctx = canvas.getContext('2d')

  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 500;

  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);
  let previosTimeStemp = 0;

  function init() {
    game.draw(ctx);
  }

  function animate(timeStemp) {
    const deltaTime = timeStemp - previosTimeStemp;
    previosTimeStemp = timeStemp;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
  }

  init();

})
