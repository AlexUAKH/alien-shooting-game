import { Explosion } from "./explosion.js";

export class SmockExplosion extends Explosion {
  constructor(game, x, y) {
    super(game, x, y);
    this.img = document.getElementById('explosion')
  }
}