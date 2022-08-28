export class BulletBase {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 28;
    this.height = 10;
    this.speed = 4;
    this.needToRemove = false;
    this.damage = 20;
  }
  update() {
    this.x += this.speed;
    if (this.x > this.game.width * 0.85) this.needToRemove = true;
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y - this.height * 0.5, this.width, this.height)
  }
}