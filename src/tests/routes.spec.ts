import request from 'supertest';
import express from 'express';
import index from '../routes/index';

const app = express();
app.use('/', index);

describe('Good Home Routes', function () {
  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('Hello World!');
  });
});