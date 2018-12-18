// Mejoras en la función  sumaDesdeHasta

// Debe hacer los mismo que la función del ejercicio 7 y además:

// si la función recibe un numero de 
// inicio mayor que el de final debe funcionar igual, sumando los enteros entre ellos.
// para ello deberemos hacer un bucle en descenso.
// utilizad un bucle for (let i = hasta; i <= desde; i++ ) {}

// Ha de pasar los test adjuntados.

function sumaDesdeHasta(desde, hasta) {
    var sumatorio = 0;

    if (typeof desde && typeof hasta === 'number') {
        if (desde < hasta){
            for (let i = desde; i <= hasta; i++ ) {
                sumatorio = sumatorio + i;
            }
            return sumatorio;
        } else{
            for (let i = hasta; i <= desde; i++ ) {
                sumatorio = sumatorio + i;
            }
            return sumatorio;
        }
    }
    else{
        throw new Error('Debo recibir números');
    }
}


let test = require('../test.js');

test(sumaDesdeHasta, [1, 2], 3);
test(sumaDesdeHasta, [2, 2], 2);
test(sumaDesdeHasta, [4, 6], 15);

test(sumaDesdeHasta, [2, 1], 3);
test(sumaDesdeHasta, [4, 2], 9);
test(sumaDesdeHasta, [-1, -2], -3);