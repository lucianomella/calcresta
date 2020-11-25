const request = require('supertest');
const app = require('../index');

describe('Endpoints:', () => {
    
    it('Resta retorna status 200', (done) => {
        let data = {
            'a': 1,
            'b': 2
        };
        request(app)
            .post('/resta')
            .send(data)
            .set('Accept', 'application/json')
            .expect(200)
            .end(err => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
    it('Resta retorna status 400', (done) => {
        let data = {
            'a': 1,
            'b': "4+ñ"
        };
        request(app)
            .post('/resta')
            .send(data)
            .set('Accept', 'application/json')
            .expect(400)
            .end(err => {
                if (err) {
                    return done(err);
                }
                done();
            })
    })
});
