import { Layer } from "/tools/Background/layer.js"

export class Background {
  constructor(game) {
    this.game = game;
    this.layer1 = document.getElementById('layer1')
    this.layer2 = document.getElementById('layer2')
    this.layer3 = document.getElementById('layer3')
    this.layer4 = document.getElementById('layer4')

    this.layer1 = new Layer(this.game, this.layer1, 0.2)
    this.layer2 = new Layer(this.game, this.layer2, 0.4)
    this.layer3 = new Layer(this.game, this.layer3, 1)
    this.layer4 = new Layer(this.game, this.layer4, 1.5)

    this.layers = [this.layer1, this.layer2, this.layer3, this.layer4]
  }
  update() {
    this.layers.forEach(layer => layer.update());
  }
  draw(ctx) {
    this.layers.forEach(layer => layer.draw(ctx));
  }
}