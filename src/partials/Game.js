import { SVG_NS ,TEXT_SIZE, PADDLE_GAP ,PADDLE_SPEED, PADDLE_WIDTH , PADDLE_HEIGHT, KEYS, BOARD_WIDTH, BOARD_HEIGHT ,BALL_RADIUS} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';


export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.paused=false;
    this.gameElement= document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    this.p1 = new Paddle(PADDLE_WIDTH, PADDLE_HEIGHT ,this.height, PADDLE_GAP, (this.height/2) - (PADDLE_HEIGHT/2), KEYS.p1Up ,KEYS.p1Down );
    this.p2 = new Paddle(PADDLE_WIDTH, PADDLE_HEIGHT ,this.height,this.width - (PADDLE_GAP+ PADDLE_WIDTH) ,  (this.height/2) - (PADDLE_HEIGHT/2) , KEYS.p2Up ,KEYS.p2Down);
    this.ball= new Ball(BALL_RADIUS, BOARD_WIDTH , BOARD_HEIGHT);
    this.s1= new Score(this.width/2-60, 30 ,TEXT_SIZE);
    this.s2= new Score(this.width/2+50, 30 ,TEXT_SIZE);


    // Other code goes here...
    document.addEventListener("keydown", event => {
      if(event.key=== KEYS.ps){
        this.p1.setSpeed(PADDLE_SPEED);
        this.p2.setSpeed(PADDLE_SPEED);
        
           this.paused = !this.paused;
       
      }
    });
  }
  render() {
    if (this.paused) {
      this.p1.setSpeed(0);
      this.p2.setSpeed(0);
      return;
    }  
    this.gameElement.innerHTML="";
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg)
    this.board.render(svg);
    this.p1.render(svg);
    this.p2.render(svg);
    this.ball.render(svg, this.p1 ,this.p2);
    this.s1.render(svg,this.p1.getScore());
    this.s2.render(svg,this.p2.getScore());

    

  
		// More code goes here....
  }
}
