
const chai = require('chai');
const { evaluate } = require('../utils');
const { expect } = chai;

const suma = `5 + 3`;
const suma_expect = ">> 8";

const variables = `
var a = 5; 
var b = a + 3; 
console.log(b + 5); 
a;`;

const variables_expect = "\n>> 13\n>> 5";

describe('Calcula valores', () => {
    it('Suma y devuelve correctamente', () => {
        expect(evaluate(suma)).to.be.string(suma_expect);
    });

    it('Resuelve variables correctamente', () => {
        expect(evaluate(variables)).to.be.a.string(variables_expect);
    });

    it('Devuelve error si el codigo fue incorrecto', () => {
        expect(evaluate('x ++t')).to.be.a.string('Expresión incorrecta');
    })
});
