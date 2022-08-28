export class Explosion {
  constructor(game, x, y) {
    this.game = game;
    this.size = 200;
    this.x = x - this.size * 0.5;
    this.y = y - this.size * 0.5;
    this.frameX = 0;
    this.frames = 8;
    this.fps = 20;
    this.timer = 0;
    this.interval = 1000 / this.fps;
    this.needToRemove = false;
  }
  update(deltaTime) {
    if (this.timer > this.interval) {
      this.frameX++;
      this.timer = 0;
    } else {
      this.timer += deltaTime
    }
    this.x -= this.game.speed;
    if (this.frameX > this.frames) this.needToRemove = true;
  }
  draw(ctx) {
    ctx.drawImage(this.img,
      this.size * this.frameX, 0,
      this.size, this.size,
      this.x, this.y, this.size, this.size
    )
  }
}