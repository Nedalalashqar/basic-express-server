const validator = require('../src/middleware/validator');
describe('validator middleware', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'validator').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('Validator Output', () => {
    validator(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('Moves The Next', () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
