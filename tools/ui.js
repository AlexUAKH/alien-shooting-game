export class UI {
  constructor(game) {
    this.game = game;
    this.font = 'Bangers';
    this.size = 30;
    this.leftMargin = 30;
    this.bulletWidth = 4;
    this.stateBoxWidth = 2 * this.bulletWidth * this.game.maxBulletsCount;
  }
  draw(ctx) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 1;
    ctx.strokeRect(this.leftMargin, 36, this.stateBoxWidth + 6, 48);

    ctx.save();
    // score
    ctx.font = `${this.size}px ${this.font}`;
    ctx.fillStyle = 'white';
    ctx.shadowColor = 'black'
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.fillText('Score: ' + this.game.score, this.leftMargin, 30);
    ctx.restore();

    //health
    const health = (this.stateBoxWidth - 4) * this.game.health / this.game.fullHealth
    ctx.fillStyle = 'red'
    ctx.fillRect(this.leftMargin + 5, 42, health, 10)

    // bullets
    if (this.game.player.powered) {
      ctx.fillStyle = 'gold'
    } else {
      ctx.fillStyle = 'white'
    }
    for (let i = 0; i < this.game.bulletsCount; i++) {
      ctx.fillRect(this.leftMargin + 5 + this.bulletWidth * 2 * i, 57, this.bulletWidth, 20)
    }

    if (this.game.gameOver) {
      ctx.save();
      ctx.font = `${this.size * 2}px ${this.font}`;
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black'
      ctx.shadowOffsetX = 4;
      ctx.shadowOffsetY = 4;
      ctx.shadowBlur = 10;
      ctx.fillText('l o o s e', this.game.width * 0.5 - ctx.measureText('l o o s e').width * 0.5, this.game.height / 2);
      ctx.restore();
    }
  }
}