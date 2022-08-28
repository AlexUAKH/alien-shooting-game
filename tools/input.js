export class InputHandler {
  constructor(game) {
    this.game = game;
    this.shootInterval = 350;
    this.timeSaved = 0;
    this.repeatShooting = true;
    window.addEventListener("keydown", (e) => {
      if (this.game.keys.indexOf(e.key) === -1 && (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === ' '
      )) {
        this.game.keys.push(e.key);
      } else if (e.key === " ") {
        // if (this.game.keys.indexOf(e.key) > -1) {
        //   if (this.shootInterval <= (Date.now() - this.timeSaved) && this.repeatShooting) {
        //     this.game.player.shoot();
        //     this.timeSaved = Date.now();
        //   }
        // } else {
        //   this.game.keys.push(e.key);
        //   this.game.player.shoot();
        //   this.timeSaved = Date.now();
        // }
      }
    })
    window.addEventListener("keyup", (e) => {
      if (this.game.keys.indexOf(e.key) !== -1) {
        this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
      }
    })
  }
}