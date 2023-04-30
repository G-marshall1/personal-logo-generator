class Shape {
    constructor () {
        this.color = ""
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shaoe {
    render() {
        return  `<polygon height="100%" width="100%" points="0,200 300,200 150,0" style="fill:${this.color};" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x=50 height="100%" width="100%" style="fill:${this.color};" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="150" r="80" style="fill:${this.color};" />`;
    }
}

module.exports = {
    Triangle, Square, Circle 
};