/**
 * Auto-generated Manual Jest Test for Main.js
 * Provides describe blocks for each function and default Page mocks.
 */

/**
 * Auto-generated Manual Jest Test for Main.js
 * Provides describe blocks for each function and default Page mocks.
 */

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {}); // silence logs
});

afterAll(() => {
  console.log.mockRestore?.();
});

describe('Main Page', () => {
  let Page;

  beforeEach(() => {
    jest.resetModules();
    const module = require('../../../../../temp/Main/Main.js'); // adjust path
    Page = module.Page;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('yearOfBirth', () => {
    test('returns correct year for valid date', () => {
      const dob = '1990-05-15';
      const result = Page.yearOfBirth(dob);
      expect(result).toBe(1990);
    });

    test('returns NaN for invalid date', () => {
      const result = Page.yearOfBirth('invalid-date');
      expect(result).toBeNaN();
    });
  });

  describe('onReady', () => {
    test('logs "Main Page Ready"', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      Page.onReady();
      expect(logSpy).toHaveBeenCalledWith("Main Page Ready");
      logSpy.mockRestore();
    });
  });
});

