import { EnemyBase } from "./enemy.js";

export class Drone extends EnemyBase {
  constructor(game, x, y) {
    super(game);
    this.width = 115;
    this.height = 95;
    this.x = x - this.width * 0.5 + Math.random() * 160 - 80;
    this.y = y - this.height * 0.5 + Math.random() * 160 - 80;
    this.damage = 40;
    this.health = 40;
    this.frameY = 0;
    this.score = this.health;
    this.frameWidth = 115;
    this.frameHeight = 95;
    this.img = document.getElementById('drone');
    this.type = 'drone';
  }
}