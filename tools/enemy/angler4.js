import { EnemyBase } from "/tools/enemy/enemy.js";

export class Enemy4 extends EnemyBase {
  constructor(game) {
    super(game);
    this.width = 114;
    this.height = 84.5;
    this.damage = 40;
    this.health = 80;
    this.score = this.health;

    this.frameWidth = 213;
    this.frameHeight = 168.5;
    this.frameY = 0;
    this.img = document.getElementById('enemy2');
  }
}