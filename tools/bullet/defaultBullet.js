import { BulletBase } from "./bullet.js";

export class Bullet1 extends BulletBase {
  constructor(game, x, y) {
    super(game, x, y);
    this.width = 17;
    this.height = 35;
    this.damage = 10;
    this.img = document.getElementById('bullet1')
  }
}