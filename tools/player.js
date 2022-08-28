import { Bullet1 } from "./bullet/defaultBullet.js";
import { Bullet2 } from "./bullet/superBullet.js";

export class Player {
  constructor(game) {
    this.game = game;
    this.x = 20;
    this.y = 180;
    this.width = 120;
    this.height = 160;
    this.frameWidth = 120;
    this.frameHeight = 190;
    this.speedY = 0;
    this.maxSpeed = 5;
    this.frames = 38;
    this.frameX = 0;
    this.frameY = 0;
    this.powered = false;
    this.powerupTimer = 0;
    this.powerupInterval = 5000;
    this.shootInterval = 300;
    this.shootTimer = this.shootInterval;
    this.img = document.getElementById('player');
  }
  update(deltaTime) {
    if (this.game.keys.includes("ArrowUp")) {
      this.speedY = -this.maxSpeed;
    } else if (this.game.keys.includes("ArrowDown")) {
      this.speedY = this.maxSpeed;
    } else {
      this.speedY = 0;
    }
    if (this.game.keys.includes(" ")) {
      if (this.shootTimer >= this.shootInterval) {
        this.shoot();
        this.shootTimer = 0;
      } else {
        this.shootTimer += deltaTime;
      }
    } else {
      this.shootTimer = this.shootInterval;
    }

    this.y += this.speedY;

    const playerMaxY = this.game.height - this.height * 0.5;
    const playerMinY = -this.height * 0.5;

    if (this.y >= playerMaxY) this.y = playerMaxY;
    if (this.y <= playerMinY) this.y = playerMinY;

    this.frameX++;
    if (this.frameX > this.frames) this.frameX = 0;

    this.frameY = this.powered ? 1 : 0;

    if (this.powered) {
      if (this.powerupTimer > this.powerupInterval) {
        this.powerupTimer = 0;
        this.powered = false;
      } else this.powerupTimer += deltaTime;
    }
  }
  draw(ctx) {
    ctx.drawImage(this.img,
      this.frameWidth * this.frameX, this.frameHeight * this.frameY,
      this.frameWidth, this.frameHeight,
      this.x, this.y,
      this.width, this.height);
  }
  shoot() {
    if (this.game.bulletsCount > 0 && !this.game.gameOver) {
      if (this.powered) {
        this.game.bullets.push(new Bullet2(this.game, this.x + this.width - 10, this.y + this.height * 0.5));
      } else {
        this.game.bullets.push(new Bullet1(this.game, this.x + this.width - 10, this.y + this.height * 0.5));
      }

      this.game.bulletsCount--;
    }
  }
}