import { UI } from "/tools/ui.js";
import { Background } from "/tools/background/background.js";
import { InputHandler } from "/tools/input.js";

import { Player } from "/tools/player.js";
import { Enemy1 } from "/tools/enemy/angler1.js";
import { Enemy2 } from "/tools/enemy/angler2.js";
import { Enemy3 } from "/tools/enemy/angler3.js";
import { Enemy4 } from "/tools/enemy/angler4.js";
import { Enemy5 } from "/tools/enemy/angler5.js";
import { Drone } from "/tools/enemy/drone.js";
import { Whale } from "/tools/enemy/whale.js";
import { Lucky1 } from "/tools/enemy/lucky1.js";
import { Lucky2 } from "/tools/enemy/lucky2.js";

import { SmockExplosion } from "/tools/effects/smock.js";
import { Particle } from "/tools/effects/particle.js";

export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.speed = .5;
    this.keys = [];
    this.score = 0;

    this.health = 100;
    this.fullHealth = 100;

    this.bullets = [];
    this.bulletsCount = 20;
    this.maxBulletsCount = 30;
    this.bulletIncreaseTimer = 0;
    this.bulletIncreaseInterval = 500;

    this.enemys = [];
    this.enemyTimer = 0;
    this.EnemyInterval = 4000;

    this.explosions = [];
    this.particles = [];

    this.background = new Background(this);
    this.inputs = new InputHandler(this);
    this.player = new Player(this);
    this.ui = new UI(this);

    this.gameOver = false;
  }
  update(deltaTime) {
    this.background.update();
    this.player.update(deltaTime);

    if (!this.gameOver) {
      // add enemy
      if (this.enemyTimer > this.EnemyInterval) {
        this.addEnemy(this.enemy);
        this.enemyTimer = 0;
      } else this.enemyTimer += deltaTime;
      if (this.bulletIncreaseTimer > this.bulletIncreaseInterval) {
        if (this.bulletsCount < this.maxBulletsCount) this.bulletsCount++;
        this.bulletIncreaseTimer = 0;
      } else this.bulletIncreaseTimer += deltaTime;
    }

    this.bullets.forEach(bullet => {
      bullet.update();
    });

    this.explosions.forEach(explosion => {
      explosion.update(deltaTime);
    });

    this.particles.forEach(particle => {
      particle.update(deltaTime);
    });

    this.enemys.forEach(enemy => {
      enemy.update()
      if (this.collision(enemy, this.player)) {
        enemy.needToRemove = true;
        this.health -= enemy.damage * 0.5;
        this.score -= enemy.score;
        if (this.score < 0) this.score = 0;
        if (this.health < 0) this.health = 0;
        if (this.health <= 0) this.gameOver = true;
        this.addExplosion(enemy);
        this.addParticles(enemy);
      }
      this.bullets.forEach(bullet => {
        if (this.collision(bullet, enemy)) {
          bullet.needToRemove = true;
          enemy.health -= bullet.damage;
          this.particles.push(new Particle(this,
            enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5))
          if (enemy.health <= 0) {
            enemy.needToRemove = true;
            this.score += enemy.score;
            if (enemy.type === 'lucky') this.player.powered = true;
            if (enemy.type === 'whale') {
              for (let i = 0; i < 4; i++) {
                this.enemys.push(
                  new Drone(this, enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5)
                )
              }
            }
            this.addExplosion(enemy);
            this.addParticles(enemy);
          }
        }
      });
    });

    this.enemys = this.enemys.filter(enemy => !enemy.needToRemove);
    this.explosions = this.explosions.filter(explosion => !explosion.needToRemove);
    this.bullets = this.bullets.filter(bullet => !bullet.needToRemove);
    this.particles = this.particles.filter(particle => !particle.needToRemove);
  }
  draw(ctx) {
    this.background.draw(ctx);
    this.enemys.forEach(enemy => enemy.draw(ctx));
    this.explosions.forEach(explosion => explosion.draw(ctx));
    this.particles.forEach(particle => particle.draw(ctx));
    this.ui.draw(ctx);
    this.player.draw(ctx);
    this.bullets.forEach(bullet => bullet.draw(ctx));
  }
  addEnemy() {
    const random = Math.random();
    // this.enemys.push(new Whale(this));

    if (random < 0.2) {
      this.enemys.push(new Enemy1(this));
    } else if (random >= 0.2 && random < 0.3) {
      this.enemys.push(new Enemy2(this));
    } else if (random >= 0.3 && random < 0.4) {
      this.enemys.push(new Whale(this));
    } else if (random >= 0.4 && random < 0.5) {
      this.enemys.push(new Lucky1(this));
    } else if (random >= 0.5 && random < 0.6) {
      this.enemys.push(new Enemy4(this));
    } else if (random >= 0.6 && random < 0.7) {
      this.enemys.push(new Lucky2(this));
    } else if (random >= 0.7 && random < 0.9) {
      this.enemys.push(new Enemy3(this));
    } else {
      this.enemys.push(new Enemy5(this));
    }
  }
  addExplosion(enemy) {
    this.explosions
      .push(new SmockExplosion(this,
        enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5));
  }
  addParticles(enemy) {
    for (let i = 0; i < 8; i++) {
      this.particles.push(new Particle(this,
        enemy.x + enemy.width * 0.5, enemy.y + enemy.height * 0.5))
    }
  }
  collision(first, second) {
    return (
      first.x + first.width > second.x &&
      first.x < second.x + second.width &&
      first.y < second.y + second.height &&
      first.y + first.height > second.y
    )
  }
}