import { SVG_NS ,BOARD_COLOR } from '../settings';

export default class Board {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    render(svg) {
        const rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);
        rect.setAttributeNS(null, "x", 0);
        rect.setAttributeNS(null, "y", 0);
        rect.setAttributeNS(null, "fill", "black");
        rect.setAttributeNS(null,"fill-opacity","0.5");
        svg.appendChild(rect);
        const text = document.createElementNS(SVG_NS, "text");
        text.setAttributeNS(null,"x",this.width/2-40);      
        text.setAttributeNS(null,"y",this.height/2);
        text.setAttributeNS(null,"fill","white");
        text.setAttributeNS(null,"font-size",20);
        text.setAttributeNS(null,"font-family","'Silkscreen web',monotype");
        text.textContent="paused";
        svg.appendChild(text);
         const text2 = document.createElementNS(SVG_NS, "text");
        text2.setAttributeNS(null,"x",this.width/2-60);      
        text2.setAttributeNS(null,"y",this.height/2+20);
        text2.setAttributeNS(null,"fill","white");
        text2.setAttributeNS(null,"font-size",10);
        text2.setAttributeNS(null,"font-family","'Silkscreen web',monotype");
        text2.textContent="press space to play";
        svg.appendChild(text2);


    }
  }
