export class EnemyBase {
  constructor(game) {
    this.game = game;
    this.x = this.game.width;
    this.y = Math.random() * this.game.height * 0.8;
    this.width = 228;
    this.height = 169;
    this.health = 10;
    this.speed = (Math.random() * 2) * this.game.speed + 0.5;

    this.frames = 38;
    this.frameX = 0;
    this.frameY = 0;
    this.frameWidth = 228;
    this.frameHeight = 169;
    this.img = document.getElementById('enemy1');
    this.needToRemove = false;
    this.score = this.health;
    this.type = 'angler';
  }
  update() {
    this.x -= this.speed;
    if (this.x < -this.width) this.needToRemove = true;
    this.frameX++;
    if (this.frameX > this.frames) this.frameX = 0;
  }
  draw(ctx) {
    ctx.drawImage(this.img,
      this.frameWidth * this.frameX, this.frameHeight * this.frameY,
      this.frameWidth, this.frameHeight,
      this.x, this.y,
      this.width, this.height);
  }
}