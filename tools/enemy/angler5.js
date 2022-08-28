import { Enemy4 } from "./angler4.js";

export class Enemy5 extends Enemy4 {
  constructor(game) {
    super(game);
    this.width = 149;
    this.height = 112;
    this.damage = 20;
    this.health = 20;
    this.score = this.health;
    this.frameY = 1;
  }
}