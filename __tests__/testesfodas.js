const request = require('supertest')
const app = require('../routes')

test('teste subtracao', async () => {
    const response = await request(app).get('/subtracao/2/1')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ resultado: 1 })
})

test('teste soma', async () => {
    const response = await request(app).get('/soma/2/1')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ resultado: 3 })
})