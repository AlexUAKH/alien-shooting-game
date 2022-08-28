import { EnemyBase } from "./enemy.js";

export class Enemy2 extends EnemyBase {
  constructor(game) {
    super(game);
    this.width = 137;
    this.height = 101;
    this.damage = 20;
    this.health = 60;
    this.frameY = 1;
    this.score = this.health;
  }
}