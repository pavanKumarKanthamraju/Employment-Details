/**
 * Auto-generated Manual Jest Test for header.js
 * Provides describe blocks for each function and default Page mocks.
 */

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {}); // silence logs
});

afterAll(() => {
  console.log.mockRestore?.();
});

describe('Common Partial', () => {
  let Partial;
  let formatDate;

  beforeEach(() => {
    jest.resetModules();
    const module = require('../../../../../temp/header/header.js');
    Partial = module.Partial;
    formatDate = module.formatDate;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('formatDate returns formatted string for valid date string', () => {
    const result = formatDate('2024-06-15T10:30:00Z');
    expect(result).toMatch(/June|15|2024/);
  });

  test('formatDate returns formatted string for Date object input', () => {
    const result = formatDate(new Date('2024-06-15'));
    expect(typeof result).toBe('string');
  });

  test('formatDate returns empty string when dateString is empty', () => {
    const result = formatDate('');
    expect(result).toBe('');
  });

  test('formatDate returns empty string for invalid date', () => {
    const result = formatDate('invalid-date');
    expect(result).toBe('');
  });

  test('Partial.onReady logs formatted date correctly', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    Partial.onReady();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('Formatted Date:')
    );
    logSpy.mockRestore();
  });
});
