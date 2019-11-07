import { SVG_NS} from '../settings';

export default class Ball {
    constructor(radius, x, y,boardWidth,boardHeight) {
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.direction = 1;
    }
    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
      }
    render(svg){
        const circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttributeNS(null, "r", this.radius);
        circle.setAttributeNS(null, "cx", this.x);
        circle.setAttributeNS(null, "cy", this.y);
        circle.setAttributeNS(null, "fill", "white");
        svg.appendChild(circle);


    }
  }