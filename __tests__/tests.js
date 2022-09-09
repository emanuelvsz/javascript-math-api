const {sub} = require('../routes')

describe('funções matemáticas da calculadora', () => {
    it('subtração de dois números', () => {
        expect(sub(4,2)).toBe(2)
    })
    it('Erro!', () => {
        expect(mult('')).toBe(undefined)
    })
})
