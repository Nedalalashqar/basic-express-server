'use strict';

const server = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

describe('My validator middleware', () => {

  it('My internal server errors', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
});

 it('get name /person ', async () => {
    const response = await request.get('/person?name=osama'); 
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
});
})




