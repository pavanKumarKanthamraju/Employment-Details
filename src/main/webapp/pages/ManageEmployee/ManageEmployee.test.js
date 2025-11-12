/**
 * Auto-generated Manual Jest Test for ManageEmployee.js
 * Provides describe blocks for each function and default Page mocks.
 */

/**
 * Auto-generated Manual Jest Test for ManageEmployee.js
 * Provides describe blocks for each function and default Page mocks.
 */

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {}); // silence logs
});

afterAll(() => {
  console.log.mockRestore?.();
});

describe('ManageEmployee Page', () => {
  let Page;
  let VALIDATOR;

  beforeEach(() => {
    jest.resetModules();

    // Mock App.getDependency
    global.App = {
      getDependency: jest.fn(() => ({
        VALIDATOR: {
          MINDATE: 'MINDATE',
          MAXDATE: 'MAXDATE',
        },
      })),
    };

    // Mock Page structure
    Page = {
      Widgets: {
        EmployeeLiveForm1: {
          formfields: {
            birthdate: { setValidators: jest.fn() },
            confirmpassword: { setValidators: jest.fn(), observeOn: jest.fn() },
            username: { setAsyncValidators: jest.fn() },
            password: { value: '123' },
          },
        },
        topnav: { Widgets: { homeLink: { caption: '' } } },
      },
      Variables: {
        FileServiceUploadFile: { dataSet: [] },
        svUsernameCount: { invoke: jest.fn() },
      },
    };

    const module = require('../../../../../temp/ManageEmployee/ManageEmployee.js'); // adjust path
    module.Page = Page;
    VALIDATOR = App.getDependency('CONSTANTS').VALIDATOR;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('onReady', () => {
    test('sets validators for birthdate and confirmpassword fields', () => {
      Page.onReady();
      expect(Page.Widgets.EmployeeLiveForm1.formfields.birthdate.setValidators).toHaveBeenCalledWith([
        expect.objectContaining({ type: VALIDATOR.MINDATE }),
        expect.objectContaining({ type: VALIDATOR.MAXDATE }),
      ]);

      expect(Page.Widgets.EmployeeLiveForm1.formfields.confirmpassword.setValidators).toHaveBeenCalled();
      expect(Page.Widgets.EmployeeLiveForm1.formfields.confirmpassword.observeOn).toHaveBeenCalledWith(['password']);
      expect(Page.Widgets.EmployeeLiveForm1.formfields.username.setAsyncValidators).toHaveBeenCalled();
    });
  });

  describe('EmployeeLiveForm1Beforeservicecall', () => {
    test('adds picurl to $data when FileServiceUploadFile has data', () => {
      Page.Variables.FileServiceUploadFile.dataSet = [{ path: 'path/to/file' }];
      const $data = {};
      Page.EmployeeLiveForm1Beforeservicecall(null, null, $data, null);
      expect($data.picurl).toBe('path/to/file');
    });

    test('does not modify $data when FileServiceUploadFile is empty', () => {
      Page.Variables.FileServiceUploadFile.dataSet = [];
      const $data = {};
      Page.EmployeeLiveForm1Beforeservicecall(null, null, $data, null);
      expect($data.picurl).toBeUndefined();
    });
  });

  describe('confirmPasswordEval', () => {
    const { confirmPasswordEval } = require('../../../../../temp/ManageEmployee/ManageEmployee.js');

    test('returns error if password and confirm password do not match', () => {
      const field = { value: '1234' };
      const form = { formfields: { password: { value: '123' } } };
      const result = confirmPasswordEval(field, form);
      expect(result).toEqual({ errorMessage: "Password & Confirm Password do notmatch" });
    });

    test('returns undefined if password matches', () => {
      const field = { value: '123' };
      const form = { formfields: { password: { value: '123' } } };
      const result = confirmPasswordEval(field, form);
      expect(result).toBeUndefined();
    });
  });

  describe('checkUsername', () => {
    const { checkUsername } = require('../../../../../temp/ManageEmployee/ManageEmployee.js');

    test('resolves when usernameCount is 0', async () => {
      Page.Variables.svUsernameCount.invoke.mockImplementation((input, cb) => cb({ usernameCount: 0 }));
      const field = { value: 'newuser' };
      const form = {};
      await expect(checkUsername(field, form)).resolves.toBeUndefined();
    });

    test('rejects when usernameCount > 0', async () => {
      Page.Variables.svUsernameCount.invoke.mockImplementation((input, cb) => cb({ usernameCount: 1 }));
      const field = { value: 'existinguser' };
      const form = {};
      await expect(checkUsername(field, form)).rejects.toEqual({
        errorMessage: "The username is already in use.",
      });
    });

    test('does nothing if field value is empty', async () => {
      const field = { value: '' };
      const form = {};
      const result = await checkUsername(field, form);
      expect(result).toBeUndefined();
    });
  });
});

