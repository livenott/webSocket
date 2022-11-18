import 'bootstrap'

import "./styles/index.scss"

console.log('Hello World');

var animalObjects = {
  cow: 3,
  hourse: 2,
};

var animalDiv = document.body.appendChild(document.createElement('div'))

for (const prop in animalObjects) {
    animalDiv.textContent += `animalObjects.${prop} = ${animalObjects[prop]}\n`;
  }