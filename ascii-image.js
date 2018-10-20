const template = document.createElement('template');

export class AsciiImage extends HTMLElement {
  constructor() {
    super();

    // ASCII Art Options
    this.map = "@#%*+=-:. ";
    this.resolutionY = 0.6;
    if (this.hasAttribute('columns')) {
      this.columns = this.getAttribute('columns')
    } else {
      this.columns = 80;
      this.setAttribute('columns', 80);
    }

    // Create Shadow DOM
    this.attachShadow({mode: 'open'});

    // If the src attribute is set, transform the image
    if (this.hasAttribute('src')) {
      this.convertToAscii(this, this.getAttribute('src'));
    }
  }

  ascii() {
    return this.asciiChars.join("");
  }

  convertToAscii(self, url) {
    let image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');

    // After the image data is loaded, process it and append to Shadow DOM
    image.onload = function() {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      let ratio = image.width / image.height;

      // Scale the image to the desired dimensions.
      canvas.width = self.columns;
      canvas.height = self.columns / ratio * self.resolutionY;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Retrieve the image data from the HTMLCanvasElement that contains our image
      let data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      // Calculate the average brightness for a tile
      for (let i = 0; i < data.length; i += 4)  {
          let brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
          data[i] = brightness;
      }

      // Map the tile's brightness to an ASCII character
      self.asciiChars = [];
      for (let i = 0; i < data.length; i += 4) {
          let rchar = self.map[Math.round((self.map.length - 1) * data[i] / 255)];
          self.asciiChars.push(rchar);
          if (Math.ceil((i + 1) / 4) % self.columns == 0) self.asciiChars.push("\n");
      }

      // Write out ASCII art into Shadow DOM
      template.innerHTML = `
      <style>
        :host { display: block }
        :host([hidden]) { display: none }
        pre {
          font-weight: bold;
          line-height: 0.95em;
        }
      </style>
      <pre>${self.ascii()}</pre>
      `;
      self.shadowRoot.appendChild(template.content.cloneNode(true));
    };

    image.src = url;
  }
}

window.customElements.define('ascii-image', AsciiImage);

export default AsciiImage