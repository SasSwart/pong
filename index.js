const WIDTH = window.innerWidth;
const HEIGHT =  window.innerHeight;

class Paddle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.fillStyle = 'rgb(254, 254, 254)';
    ctx.fillRect(
      (this.x - this.width/2) * WIDTH / 100, (this.y - this.height/2) * HEIGHT / 100, this.width * WIDTH / 100, this.height * HEIGHT / 100);
  }
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(ctx) {
    ctx.fillStyle = 'rgb(254, 254, 254)';
    ctx.beginPath();
    ctx.arc((this.x - this.radius) * WIDTH / 100, (this.y - this.radius) * HEIGHT / 100, this.radius * HEIGHT / 100, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

function draw(canvas) {
  let player1 = new Paddle(5, 50, 1, 10);
  let player2 = new Paddle(95, 50, 1, 10);
  let ball = new Ball(50, 50, 1);

  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    player1.draw(ctx);
    player2.draw(ctx);
    ball.draw(ctx);
  }
}

function main() {
  let canvas = document.getElementById('canvas');
  canvas.setAttribute("width", WIDTH);
  canvas.setAttribute("height", HEIGHT);

  const FPS = 30
  setInterval(draw, 1000/FPS, canvas)
}