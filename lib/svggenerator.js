Class SVG {
    constructor() {
        this.shapes = "";
        this.text = "";
    }
    render() {
        return `<svg height="100%" width="100%" style="background-color:grey;">${this.shapes}${this.text}</svg>`;
    }

    setText(text) {
        this.text = `<text x="150" y="150" text-anchor="middle" style="fill:white;">${text}</text>`;
    }

    setShaoe(shape) {
        this.shapes = shape.render();
    }
}

module.exports = SVG;
