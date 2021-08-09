'use strict';

const server = require('../src/server');
const superTest = require('supertest');
const request = superTest(server.app);

describe('my Server', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation();
  });

  it('Not found request', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(404);
  });

  it('My Internal Server Errors', async () => {
    const response = await request.post('/throwing-error');
    expect(response.status).toEqual(500);
  });

  it('get data from /data ', async () => {
    const response = await request.get('/test');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  });

  it('/ route works', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    console.log(response.text);
    expect(response.text).toEqual('Hello World');
  });
});