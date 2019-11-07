import { SVG_NS} from '../settings';

export default class Ball {
    constructor(radius, x, y,boardWidth,boardHeight) {
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      this.reset();
    }
    ballMove(){
        this.x+= this.vx;
        this.y+= this.vy;
    }
    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        this.vy=0;
        while (this.vy===0) {
            this.vy=Math.floor(Math.random() * 10 -5)
        }
        this.vx=this.direction * (6 - Math.abs(this.vy));
      }
    render(svg){
        const circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttributeNS(null, "r", this.radius);
        circle.setAttributeNS(null, "cx", this.x);
        circle.setAttributeNS(null, "cy", this.y);
        circle.setAttributeNS(null, "fill", "white");
        svg.appendChild(circle);
        this.ballMove();

    }
  }