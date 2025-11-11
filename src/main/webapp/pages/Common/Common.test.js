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

    // ✅ Define globals before requiring Common.js
    global.Partial = {
      Widgets: {},
      Variables: {},
      Actions: {
        appNotification: { invoke: jest.fn() }
      }
    };

    // ✅ Require the file AFTER defining globals
    
    const module = require('../../../../../temp/Common/Common.js');
    console.log('Module loaded:', module);

    // ✅ Reference from global
    Partial = module.Partial || {};
    Partial.Widgets = Partial.Widgets || {};
    Partial.Variables = Partial.Variables || {};
    Partial.Actions = Partial.Actions || { appNotification: { invoke: jest.fn() } };
    formatDate = Partial.formatDate
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete global.Partial;
    delete global.formatDate;
  });

  test('formatDate should format a valid ISO date string correctly', () => {
    const result = formatDate('2024-06-15T10:30:00Z');
    expect(typeof result).toBe('string');
    expect(result).toMatch(/\d{4}/); // contains a year
  });

  test('formatDate should return empty string when input is empty', () => {
    const result = formatDate('');
    expect(result).toBe('');
  });

  test('formatDate should return empty string when input is invalid', () => {
    const result = formatDate('invalid-date');
    expect(result).toBe('');
  });

  test('Partial.onReady should call formatDate and log formatted date', () => {
    const spyFormat = jest.fn().mockReturnValue('June 15, 2024');
    global.formatDate = spyFormat;

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    Partial.onReady();

    // Assert the helper was called at least once
    expect(spyFormat).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalled();

    logSpy.mockRestore();
  });
});
