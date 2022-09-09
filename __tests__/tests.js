const {mult} = require('../routes')

describe('funções matemáticas da calculadora', () => {
    it('multiplica dois números', () => {
        expect(mult(1,2)).toBe(2)
    })
})
