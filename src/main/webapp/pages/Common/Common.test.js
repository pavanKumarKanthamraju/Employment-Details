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

describe('Common Partial', () => {
  let Partial;
  let formatDate;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();

    global.Partial = {
      Widgets: {},
      Variables: {},
      Actions: {
        appNotification: { invoke: jest.fn() }
      }
    };

    const module = require('../../../../../temp/Common/Common.js');
    Partial = module.Partial || {};
    formatDate = Partial.formatDate;
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete global.Partial;
    delete global.formatDate;
  });

  test('formatDate should format a valid ISO date string correctly', () => {
    const result = formatDate('2024-06-15T10:30:00Z');
    expect(typeof result).toBe('string');
    expect(result).toMatch(/\d{4}/);
  });

  test('formatDate should return empty string when input is empty', () => {
    const result = formatDate('');
    expect(result).toBe('');
  });

  test('formatDate should return empty string when input is invalid', () => {
    const result = formatDate('invalid-date');
    expect(result).toBe('');
  });

  test('formatDate should handle non-string input', () => {
    const result = formatDate(12345);
    expect(typeof result).toBe('string');
  });

  test('formatDate should return formatted date for valid Date object', () => {
    const result = formatDate(new Date('2024-06-15T10:30:00Z'));
    expect(result).toContain('2024');
  });

  test('Partial.onReady should call formatDate and log formatted date', () => {
    const spyFormat = jest.fn().mockReturnValue('June 15, 2024');
    global.formatDate = spyFormat;
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    Partial.onReady();

    expect(spyFormat).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalled();

    logSpy.mockRestore();
  });

  test('Partial.onReady should handle missing appNotification gracefully', () => {
    delete Partial.Actions.appNotification;
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    Partial.onReady();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('Notification action missing'));
    logSpy.mockRestore();
  });
});

