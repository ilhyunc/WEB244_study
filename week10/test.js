// Create the <div> element
const divElement = document.createElement('div');

// Set the id and class attributes
divElement.setAttribute('id', 'myDiv');
divElement.setAttribute('class', 'container');

// Create the <p> element
const pElement = document.createElement('p');

// Create the text node with the content
const textNode = document.createTextNode('Hello Everyone');

// Append the text node to the <p> element
pElement.appendChild(textNode);

// Append the <p> element to the <div> element
divElement.appendChild(pElement);

// Append the <div> element to the document body
document.body.appendChild(divElement);
