import { SVG_NS} from '../settings';

export default class Ball {
    constructor(radius,boardWidth,boardHeight) {
      this.radius = radius;
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
      wallCollision(){
          if (this.y<0+ this.radius || this.y> this.boardHeight - this.radius) {
              this.vy= - this.vy;} 
      };
      paddleCollision(p,pp){
        const y1 = this.x<(p.x+ p.width + this.radius) && this.x>p.x && this.y>p.y && this.y < (p.y + p.height)
        const y2 = this.x> (pp.x - this.radius) &&  this.x< (pp.x+ pp.width ) && this.y>pp.y && this.y < (pp.y + pp.height)

        if (y1 || y2) {
            this.vx= - this.vx;
            
          }
      }

    render(svg, p1 ,p2){
        const circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttributeNS(null, "r", this.radius);
        circle.setAttributeNS(null, "cx", this.x);
        circle.setAttributeNS(null, "cy", this.y);
        circle.setAttributeNS(null, "fill", "white");
        svg.appendChild(circle);
        this.ballMove();
        this.wallCollision();
        this.paddleCollision(p1,p2);

    }
  }