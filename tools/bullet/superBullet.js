import { BulletBase } from "./bullet.js";

export class Bullet2 extends BulletBase {
  constructor(game, x, y) {
    super(game, x, y);
    this.width = 27;
    this.height = 35;
    this.damage = 20;
    this.img = document.getElementById('bullet2')
  }
}