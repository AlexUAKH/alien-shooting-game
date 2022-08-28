import { EnemyBase } from "/tools/enemy/enemy.js";

export class Lucky1 extends EnemyBase {
  constructor(game) {
    super(game);
    this.width = 99;
    this.height = 95;
    this.damage = 20;
    this.health = 20;
    this.score = this.health;
    this.lucky = true;

    this.frameWidth = 99;
    this.frameHeight = 95;
    this.frameY = 0;
    this.img = document.getElementById('lucky');
    this.type = 'lucky';
  }
}