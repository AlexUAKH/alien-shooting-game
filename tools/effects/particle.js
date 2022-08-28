export class Particle {
  constructor(game, x, y) {
    this.game = game;
    this.frameSize = 50;
    this.size = this.frameSize * (Math.random() * 0.5 + 0.5).toFixed(1);
    this.x = x - this.size * 0.5;
    this.y = y - this.size * 0.5;
    this.frameX = Math.round(Math.random() * 2);
    this.frameY = Math.round(Math.random() * 2);
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * -15;
    this.weight = 0.5;
    this.angle = 0;
    this.rotationSpeed = Math.random() * 0.4 - 0.2;
    this.img = document.getElementById('gears');
    this.needToRemove = false;
    this.jump = Math.ceil(Math.random() * 2 + 1);
    this.jumpBoundary = Math.random() * 50 + 70;
  }
  update() {
    this.angle += this.rotationSpeed;
    this.speedY += this.weight;
    this.x += this.speedX + this.game.speed;
    this.y += this.speedY;
    if (this.x < 0 || this.x > this.game.width || this.y > this.game.height + this.size) this.needToRemove = true;
    if (this.y > this.game.height - this.jumpBoundary && this.jump) {
      this.jump--;
      this.speedY *= -0.6
    }
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.drawImage(this.img,
      this.frameSize * this.frameX, this.frameSize * this.frameY,
      this.frameSize, this.frameSize,
      this.size * -0.5, this.size * -0.5, this.size, this.size
    )
    ctx.restore();
  }
}