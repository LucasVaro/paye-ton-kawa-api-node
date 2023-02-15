import request from 'supertest';
import express from 'express';
import index from '../routes/index';

const app = express();
app.use('/', index);

<<<<<<< HEAD
describe('Good Index Routes', function () {
  it('responds to /', async () => {
=======
describe('Good Home Routes', function () {
  test('responds to /', async () => {
>>>>>>> 48dedb3 (add tests)
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('Hello World!');
  });
<<<<<<< HEAD

  it('not responds to /about', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).not.toBe(200);
    expect(res.text).not.toEqual('About Page');
  })
});
=======
});
>>>>>>> 48dedb3 (add tests)
