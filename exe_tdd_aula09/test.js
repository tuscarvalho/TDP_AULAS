const chai   = require('chai');
const expect = chai.expect;
const calculation = require('./age/script.js')

const date = new Date();

describe('Calculo do ano de nascimento' , () => {

    //test1
    it('Ano atual 2021 - Ano de nascimento 1992', done => {
        //trocar só o ano de nascimento
        //Ano vigente está sendo retornado dinamicamente
        const r = calculation.ageCalc(date.getFullYear(), 1992)
        expect(r).be.equal(29);
        done();
    });

    //test2
    it('Ano atual 2021 - Ano de nascimento 2014', done => {
        //trocar só o ano de nascimento
        //Ano vigente está sendo retornado dinamicamente
        const r = calculation.ageCalc(date.getFullYear(), 2014)
        expect(r).be.equal(7);
        done();
    });
})