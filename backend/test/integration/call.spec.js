const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Call', () => {
    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to register a new price on the list', async () => {
        const response = await request(app)
            .post('/register')
            .send({
                origin: "11",
                receiver: "16",
                value: 1.9
            });
        console.log(response.body);
    });

    it('should be able to calculate the long distance call value', async () => {
        const response = await request(app)
            .post('/call')
            .send({
                origin: "11",
                receiver: "16",
                min: 30,
                plan: "default"
            });
        expect(response.body).toBe(57);
    });
});