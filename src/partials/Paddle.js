import { SVG_NS ,BOARD_HEIGHT} from '../settings';
export default class Paddle {
    constructor(width, height,boardHeight,x,y,upKey ,downKey) {
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      this.boardHeight=boardHeight;
      this.score=0;
      this.speed= 10;
      document.addEventListener("keydown", event => {
        switch (event.key) {
          case upKey:
            this.moveUp();
            console.log("up");
            break;
          case downKey:
            console.log("down");
            this.moveDown();
            break;
        }
      });
    }

    moveUp(){
      
        this.y = Math.max((this.y-this.speed) , 0)
      }
    moveDown(){
      this.y = Math.min((this.y+this.speed) , BOARD_HEIGHT - this.height)

    }
    render(svg) {
        const rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);
        rect.setAttributeNS(null, "x", this.x);
        rect.setAttributeNS(null, "y", this.y);
        rect.setAttributeNS(null, "fill", "white");
        svg.appendChild(rect);

    }
  }
