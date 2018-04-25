import chai from 'chai';
import supertest from 'supertest';
import app from '../app';

const expect = chai.expect;
const api = supertest(app);

describe('Routes', () => {
  describe('index', () => {
    it('should return a 200 response', (done) => {
      api.get('/')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });
});
