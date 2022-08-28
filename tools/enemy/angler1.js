import { EnemyBase } from "/tools/enemy/enemy.js";

export class Enemy1 extends EnemyBase {
  constructor(game) {
    super(game);
    this.width = 182;
    this.height = 135;
    this.damage = 10;
    this.health = 50;
    this.frameY = 0;
    this.score = this.health;
  }
}