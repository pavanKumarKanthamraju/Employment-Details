/**
 * Auto-generated Manual Jest Test for Common.js
 * Provides describe blocks for each function and default Page mocks.
 */

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {}); // silence logs
});

afterAll(() => {
  console.log.mockRestore?.();
});

let TestPartial;
let formatDate;

beforeEach(() => {
  global.Partial = {};
  jest.resetModules();
  const module = require('./Common.js'); // adjust path if needed

  TestPartial = module.Partial || {};
  // Mock Widgets/Variables fully to cover all lines in onReady
  TestPartial.Widgets = {
    someWidget: { datavalue: 'mock' }
  };
  TestPartial.Variables = {
    loggedInUser: { getData: jest.fn() }
  };
  TestPartial.Actions = {
    appNotification: { invoke: jest.fn() }
  };

  formatDate = module.formatDate;
  jest.clearAllMocks();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('formatDate()', () => {
  test('returns formatted string for valid ISO string', () => {
    expect(formatDate('2024-06-15T10:30:00Z')).toMatch(/June|15|2024/);
  });

  test('returns formatted string for Date object', () => {
    expect(typeof formatDate(new Date('2024-06-15'))).toBe('string');
  });

  test('returns empty string for empty input', () => {
    expect(formatDate('')).toBe('');
  });

  test('returns empty string for invalid date', () => {
    expect(formatDate('invalid')).toBe('');
  });
});

describe('Partial.onReady()', () => {
  test('calls console.log with formatted date', () => {
    const logSpy = jest.spyOn(console, 'log');
    TestPartial.onReady();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('Formatted Date:'));
    logSpy.mockRestore();
  });

  test('does not throw if Widgets or Variables are missing', () => {
    delete TestPartial.Widgets;
    delete TestPartial.Variables;
    expect(() => TestPartial.onReady()).not.toThrow();
  });
});
