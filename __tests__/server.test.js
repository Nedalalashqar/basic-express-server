'use strict';

const server = require('../src/server');
const superTest = require('supertest');
const request = superTest(server.app);
describe('my Server', () => {
    it('Not found request', async () => {
      const response = await request.get('/bad');
      expect(response.status).toEqual(404);
  });
  it('Not found person', async () => {
      const response = await request.post('/person');
      expect(response.status).toEqual(404);
  });
});