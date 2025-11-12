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
    const module = require('./Main.js'); // adjust path
    Page = module.Page;

    // Mock Widgets
    Page.Widgets = {
      headingLabel: { caption: '' },
      topnav: { Widgets: { homeLink: { caption: '' } } },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('onReady sets headingLabel caption', () => {
    Page.onReady();
    expect(Page.Widgets.headingLabel.caption).toBe('Employee Listing');
  });

  test('topnavLoad sets homeLink caption', () => {
    const widget = {}; // not used in the function
    Page.topnavLoad(null, widget);
    expect(Page.Widgets.topnav.Widgets.homeLink.caption).toBe('Employees');
  });

  test('HrdbEmployeeDataonBeforeDatasetReady adds fullName to each employee', () => {
    const data = [
      { firstname: 'John', lastname: 'Doe' },
      { firstname: 'Jane', lastname: 'Smith' },
    ];
    Page.HrdbEmployeeDataonBeforeDatasetReady(null, data);
    expect(data[0].fullName).toBe('John Doe');
    expect(data[1].fullName).toBe('Jane Smith');
  });

  test('calculateAge returns correct age', () => {
    const dob = new Date();
    dob.setFullYear(dob.getFullYear() - 25); // 25 years ago
    const age = Page.calculateAge(dob.toISOString());
    expect(age).toBe(25);
  });

  test('calculateAge returns NaN for invalid date', () => {
    const age = Page.calculateAge('invalid-date');
    expect(age).toBeNaN();
  });
});


