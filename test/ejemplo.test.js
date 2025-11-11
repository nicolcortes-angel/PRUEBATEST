//un archivo .test.js se conoce como suit de pruebas
// Es el lugar donde ustedes definen los casos de prueba agrupados por tematica 

//1. importanciones

import {suma} from '../src/utils/ejemplo.js';

//2. definicion de la suit de pruebas
describe("probar la funcion suma...", ()=>{
it("caso de prueba suma de numeros positivos", ()=>{
 expect(suma(3,5)).toBe(8);
});

it("caso de prueba suma de numeros ceros", ()=>{
    expect(suma(6,0)).toBe(7);
});

it("caso de prueba suma de numeros negativos", ()=>{
    expect(suma(-4,-6)).toBe(-10);
});          




});

