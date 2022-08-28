import { EnemyBase } from "/tools/enemy/enemy.js";

export class Enemy3 extends EnemyBase {
  constructor(game) {
    super(game);
    this.width = 228;
    this.height = 169;
    this.damage = 30;
    this.health = 70;
    this.frameY = 2;
    this.score = this.health;
  }
}