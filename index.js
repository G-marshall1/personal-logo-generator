const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
svggernertor = require('./lib/svggenerator');

const {Triangle, Square, Circle} = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What would you like to write on your SVG?'

    },

    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?'

    },

    {  
        type: 'input',
        name: 'color',
        message: 'What color would you like to use?'

    },

    {
        type: 'input',
        name: 'shape_color',
        message: 'What color would you like to use for your shape?'

    },
]

let shape;

function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
     switch (answers.shape) {
         case "circle": 
            shape = new Circle();
         break;
            case "square":
                shape = new Square();
            break;
            case "triangle":
                shape = new Triangle();
            break;
     }   

     const svg = new svggenerator.SVG();
     svg.setText(answers.text, answers.color);
     shape.setColor(answers.shape_color);
     svg.setShape(shape);
     
     const svgString = svg.render();
     return writeToFile("logo.svg", svgString)
         })
     
     //function to write data to file
     function writeToFile(fileName, data) {
         fs.writeFile (fileName, data, (err) => {
             if (err)
             return console.log(err);
             else {
                 console.log("Success! Generated logo.svg");
             }

            });
        }

        writeToFile (svggenerator.SVG, svgString);

}

init();