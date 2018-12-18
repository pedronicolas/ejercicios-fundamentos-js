// crea la función duplicaNumero
// debe recibir un tipo number y devolver el doble del valor recibido

// Si la función no recibe un dato tipo number debe
// devolver el string 'Debo ser ejecutada con un numero'

// Ha de pasar los test adjuntados.

function duplicaNumero(x) {
    if (typeof x === 'number') {
        return 2 * x;
    }
    return 'Debo ser ejecutada con un numero';
}

let test = require('../test.js');

//  test(functionTotest, [argumento1,argumento2, etc..],  expectedOutput) 
// comprueba si: duplicaNumero(1) === 2 
// console.log(duplicaNumero(5) === 10);

test(duplicaNumero, [1], 2);
test(duplicaNumero, [0], 0);
test(duplicaNumero, [-2], -4);
test(duplicaNumero, ['hola'], 'Debo ser ejecutada con un numero');