const {somar} = require('../routes')

describe('funções matemáticas da calculadora', () => {
    it('soma dois números', () => {
        expect(somar(1,2)).toBe(3)
    })
})
