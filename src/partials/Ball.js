import { SVG_NS} from '../settings';
import pingSound from '../../public/sounds/pong-01.wav'
export default class Ball {
    constructor(radius,boardWidth,boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      this.reset();
      this.ping= new Audio (pingSound)
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
      wallCollision(p,pp){
        const hitLeft= this.x<0
        const hitRight= this.x> this.boardWidth;

          if (this.y<0+ this.radius || this.y> this.boardHeight - this.radius) {
              this.vy= - this.vy;} 
              if (hitLeft) {
                this.direction=1
                this.reset();
                pp.increaseScore();
              } else if(hitRight){
                this.direction=-1
                this.reset();
                p.increaseScore();
              }
      };
      paddleCollision(p,pp){
        let hitWall , checkTop, checkBottom;
              if (this.vx<0) {
         hitWall =this.x<(p.x+ p.width + this.radius) && this.x>p.x;
         checkBottom  =this.y < (p.y + p.height);
         checkTop= this.y>p.y
       } else {
        hitWall =this.x> (pp.x - this.radius) && this.x<pp.x;
        checkBottom  =this.y < (pp.y + pp.height);
        checkTop= this.y>pp.y;
       }
        
       if (hitWall && checkBottom && checkTop) {
            this.vx= - this.vx;
            this.direction= - this.direction;
            this.ping.play();
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
        this.wallCollision(p1,p2);
        this.paddleCollision(p1,p2);

    }
  }