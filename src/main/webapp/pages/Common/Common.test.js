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
  jest.resetModules();
  const module = require('./Common.js'); // adjust path if needed
  TestPartial = module.Partial || {};
  TestPartial.Widgets = TestPartial.Widgets || {};
  TestPartial.Variables = TestPartial.Variables || {};
  TestPartial.Actions = TestPartial.Actions || { appNotification: { invoke: jest.fn() } };

  formatDate = module.formatDate;
  jest.clearAllMocks();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('formatDate()', () => {
  test('should return formatted string for valid date string', () => {
    const result = formatDate('2024-06-15T10:30:00Z');
    expect(result).toMatch(/June|15|2024/);
  });

  test('should return formatted string for Date object', () => {
    const result = formatDate(new Date('2024-06-15'));
    expect(typeof result).toBe('string');
  });

  test('should return empty string for empty input', () => {
    const result = formatDate('');
    expect(result).toBe('');
  });

  test('should return empty string for invalid date', () => {
    const result = formatDate('invalid-date');
    expect(result).toBe('');
  });
});

describe('Partial.onReady()', () => {
  test('should call console.log with formatted date', () => {
    const logSpy = jest.spyOn(console, 'log');
    TestPartial.onReady();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('Formatted Date:')
    );
    logSpy.mockRestore();
  });

  test('should not throw if Partial.Widgets or Variables are missing', () => {
    delete TestPartial.Widgets;
    delete TestPartial.Variables;
    expect(() => TestPartial.onReady()).not.toThrow();
  });
});
