import { SVG_NS } from '../settings';

export default class Winner {
    constructor(width, height , w) {
      this.width = width;
      this.height = height;
      this.w = w;
    
        
    }
    render(svg) {
        const rect = document.createElementNS(SVG_NS, "rect");
        rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);
        rect.setAttributeNS(null, "x", 0);
        rect.setAttributeNS(null, "y", 0);
        rect.setAttributeNS(null, "fill", "maroon");
        rect.setAttributeNS(null,"fill-opacity","0.5");
        svg.appendChild(rect);
        const text = document.createElementNS(SVG_NS, "text");
        text.setAttributeNS(null,"x",this.width/2-100);      
        text.setAttributeNS(null,"y",this.height/2);
        text.setAttributeNS(null,"fill","white");
        text.setAttributeNS(null,"font-size",20);
        text.setAttributeNS(null,"font-family","'Silkscreen web',monotype");
        text.textContent="the "+ this.w + " guy";
        svg.appendChild(text);
        const text2 = document.createElementNS(SVG_NS, "text");
        text2.setAttributeNS(null,"x",this.width/2-100);      
        text2.setAttributeNS(null,"y",this.height/2+30);
        text2.setAttributeNS(null,"fill","white");
        text2.setAttributeNS(null,"font-size",30);
        text2.setAttributeNS(null,"font-family","'Silkscreen web',monotype");
        text2.textContent="is the winner. ";
        svg.appendChild(text2);
    }
  }
