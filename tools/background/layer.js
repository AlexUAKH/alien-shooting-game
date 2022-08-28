export class Layer {
  constructor(game, img, speedModif) {
    this.game = game;
    this.img = img;
    this.speedModif = speedModif;
    this.height = 500;
    this.width = 1768;
    this.x = 0;
    this.y = 0;
  }
  update() {
    if (this.x <= -this.width) this.x = 0;
    this.x -= this.speedModif * this.game.speed;
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height)
  }
  // update() {
  //   if (this.x > this.width) this.x = 0;
  //   this.x += this.speedModif * this.game.speed;
  // }
  // draw(ctx) {
  //   ctx.drawImage(
  //     this.img,
  //     this.x, this.y, this.width, this.height,
  //     0, 0, this.game.width, this.game.height
  //   )
  //   ctx.drawImage(
  //     this.img,
  //     this.x - this.width, this.y, this.width, this.height,
  //     0, 0, this.game.width, this.game.height
  //   )
  // }
}