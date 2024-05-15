const numberToText = require('number-to-text');
require('number-to-text/converters/en-us');

// Tarea: Investigar cómo leer valores de consola con node.js
// Después, leer un número y mostrar el valor en texto del número leído.

let textNumber = numberToText.convertToText(12346);

let textNumber2 = numberToText.convertToText("12346");

console.log(textNumber);
console.log(textNumber2);
