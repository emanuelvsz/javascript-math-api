const {somar, multiplicar, subtrair, dividir} = require('../routes')

describe('funções matemáticas da calculadora', () => {
    it('soma dois números', () => {
        expect(somar(1,2)).toBe(3)
    });
    it('subtrai dois números', () => {
        expect(subtrair(10,2)).toBe(8)
    });
    it('multiplica dois números', () => {
        expect(multiplicar(2,5)).toBe(10)
    });
    it('divide dois números', () => {
        expect(dividir(10,5)).toBe(2)
    });
})
