import { EnemyBase } from "./enemy.js";

export class Whale extends EnemyBase {
  constructor(game) {
    super(game);
    this.width = 400;
    this.height = 227;
    this.damage = 50;
    this.health = 40;
    this.frameY = 0;
    this.score = this.health;
    this.frameWidth = 400;
    this.frameHeight = 227;
    this.img = document.getElementById('whale');
    this.type = 'whale';
  }
}