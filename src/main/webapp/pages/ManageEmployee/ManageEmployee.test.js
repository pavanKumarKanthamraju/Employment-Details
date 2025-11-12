/**
 * Auto-generated Manual Jest Test for ManageEmployee.js
 * Provides describe blocks for each function and default Page mocks.
 */

/**
 * Auto-generated Manual Jest Test for ManageEmployee.js
 * Provides describe blocks for each function and default Page mocks.
 */

/**
 * Jest tests for ManageEmployee.js
 */

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {}); // silence logs
});

afterAll(() => {
  console.log.mockRestore?.();
});

describe('ManageEmployee Page', () => {
  let Page;
  let confirmPasswordEval;
  let checkUsername;

  beforeEach(() => {
    jest.resetModules();

    // Mock App.getDependency globally BEFORE requiring the module
    global.App = {
      getDependency: jest.fn(() => ({
        VALIDATOR: { MINDATE: 'MINDATE', MAXDATE: 'MAXDATE' },
      })),
    };

    const module = require('../../../../../temp/ManageEmployee/ManageEmployee.js'); // adjust path
    Page = module.Page;
    confirmPasswordEval = module.confirmPasswordEval;
    checkUsername = module.checkUsername;

    // Mock Page Widgets & Variables for tests
    Page.Widgets = {
      EmployeeLiveForm1: {
        formfields: {
          birthdate: { setValidators: jest.fn() },
          confirmpassword: { setValidators: jest.fn(), observeOn: jest.fn() },
          username: { setAsyncValidators: jest.fn() },
          password: { value: '123' },
        },
      },
    };
    Page.Variables = {
      FileServiceUploadFile: { dataSet: [] },
      svUsernameCount: { invoke: jest.fn() },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('onReady sets all validators', () => {
    Page.onReady();
    expect(Page.Widgets.EmployeeLiveForm1.formfields.birthdate.setValidators).toHaveBeenCalled();
    expect(Page.Widgets.EmployeeLiveForm1.formfields.confirmpassword.setValidators).toHaveBeenCalledWith([confirmPasswordEval]);
    expect(Page.Widgets.EmployeeLiveForm1.formfields.confirmpassword.observeOn).toHaveBeenCalledWith(['password']);
    expect(Page.Widgets.EmployeeLiveForm1.formfields.username.setAsyncValidators).toHaveBeenCalledWith([checkUsername]);
  });

  test('EmployeeLiveForm1Beforeservicecall sets picurl if data exists', () => {
    Page.Variables.FileServiceUploadFile.dataSet = [{ path: 'path/to/file' }];
    const $data = {};
    Page.EmployeeLiveForm1Beforeservicecall(null, null, $data, null);
    expect($data.picurl).toBe('path/to/file');
  });

  test('EmployeeLiveForm1Beforeservicecall does nothing if no data', () => {
    Page.Variables.FileServiceUploadFile.dataSet = [];
    const $data = {};
    Page.EmployeeLiveForm1Beforeservicecall(null, null, $data, null);
    expect($data.picurl).toBeUndefined();
  });

  test('confirmPasswordEval returns error for mismatch', () => {
    const field = { value: '1234' };
    const form = { formfields: { password: { value: '123' } } };
    expect(confirmPasswordEval(field, form)).toEqual({ errorMessage: "Password & Confirm Password do notmatch" });
  });

  test('confirmPasswordEval returns undefined for match', () => {
    const field = { value: '123' };
    const form = { formfields: { password: { value: '123' } } };
    expect(confirmPasswordEval(field, form)).toBeUndefined();
  });

  test('checkUsername resolves when usernameCount = 0', async () => {
    Page.Variables.svUsernameCount.invoke.mockImplementation((input, cb) => cb({ usernameCount: 0 }));
    await expect(checkUsername({ value: 'newuser' }, {})).resolves.toBeUndefined();
  });

  test('checkUsername rejects when usernameCount > 0', async () => {
    Page.Variables.svUsernameCount.invoke.mockImplementation((input, cb) => cb({ usernameCount: 1 }));
    await expect(checkUsername({ value: 'existinguser' }, {})).rejects.toEqual({
      errorMessage: "The username is already in use.",
    });
  });

  test('checkUsername does nothing if value empty', async () => {
    await expect(checkUsername({ value: '' }, {})).resolves.toBeUndefined();
  });
});


