import chai from 'chai';
import supertest from 'supertest';
import app from '../../app';
import mealRoute from '../../server/routes/meals';

const expect = chai.expect;
const api = supertest(app);

describe('Routes', () => {
  describe('index page ', () => {
    it('should return a 200 response', (done) => {
      api.get('/')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });
  describe('Call to api/v1/meals/ without being authorized', () => {
    it('should return a 403 response', (done) => {
      api.get('/api/v1/meals')
        .set('Accept', 'application/json')
        .expect(403, done);
    });
  });
  describe('Gets the post meals route', () => {
    it('should return a 403 response', (done) => {
      api.post('/api/v1/meals')
        .set('Accept', 'application/json')
        .expect(403, done);
    });
  });
});
