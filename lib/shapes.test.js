const Triangle = require('./shapes').Triangle;

text("test triangle render", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toBe(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" style="fill:blue;" />`);

});

const Square = require('./shapes').Square;

Text("test square render", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toBe(`<rect x=50 height="100%" width="100%" style="fill:red;" />`);

});

const Circle = require('./shapes').Circle;

Text("test circle render", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toBe(`<circle cx="150" cy="150" r="80" style="fill:red;" />`);

});