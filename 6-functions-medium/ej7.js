// crea la función  sumaDesdeHasta
// debe recibir dos parámetros tipo number, 
// y devolver la suma de los enteros desde el primero hasta el ultimo

// Si los argumentos no son tipo number debe lanzar un Error con:
// throw new Error('Debo recibir números');

// utilizad un bucle for (let i = desde; i <= hasta; i++ ) {}

// Ha de pasar los test adjuntados.

function sumaDesdeHasta(desde, hasta) {
    var sumatorio = 0;
    if (typeof desde && typeof hasta === 'number') {
        for (let i = desde; i <= hasta; i++ ) {
            sumatorio = sumatorio + i;
        }
        return sumatorio;
    } else {
        throw new Error('Debo recibir números');
    }


}

let test = require('../test.js');

test(sumaDesdeHasta, [1, 2], 3);
test(sumaDesdeHasta, [2, 2], 2);
test(sumaDesdeHasta, [4, 6], 15);