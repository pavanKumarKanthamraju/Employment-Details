/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

var VALIDATOR = App.getDependency('CONSTANTS').VALIDATOR;
/* perform any action on widgets/variables within this block */
Page.onReady = function() {
    /*
     * variables can be accessed through 'Page.Variables' property here
     * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
     * Page.Variables.loggedInUser.getData()
     *
     * widgets can be accessed through 'Page.Widgets' property here
     * e.g. to get value of text widget named 'username' use following script
     * 'Page.Widgets.username.datavalue'
     */

    Page.Widgets.EmployeeLiveForm1.formfields.birthdate.setValidators([{

        type: VALIDATOR.MINDATE,
        validator: '1990-12-31',
        // Display error message for the form field
        errorMessage: "Date cannot be less than Dec 31st, 1990"
    }, {
        type: VALIDATOR.MAXDATE,
        validator: '2002-12-31',
        // Display error message for the form field
        errorMessage: "Date cannot be greater than Dec 31st, 2002"
    }]);

    Page.Widgets.EmployeeLiveForm1.formfields.confirmpassword.setValidators([confirmPasswordEval]);
    Page.Widgets.EmployeeLiveForm1.formfields.confirmpassword.observeOn(['password']);
    Page.Widgets.EmployeeLiveForm1.formfields.username.setAsyncValidators([checkUsername]);


};

Page.EmployeeLiveForm1Beforeservicecall = function($event, $operation, $data, options) {
    if (Page.Variables.FileServiceUploadFile.dataSet.length > 0) {
        $data.picurl =
            Page.Variables.FileServiceUploadFile.dataSet[0].path;
    }

};

// Demonstrating usage of Observe On Validators
function confirmPasswordEval(field, form) {
    debugger
    if (field.value && form.formfields.password.value !=
        field.value) {
        return {
            errorMessage: "Password & Confirm Password do notmatch"
        };
    }
}

Page.checkUsername = function (field, form) {
    return new Promise((resolve, reject) => {
      if (!field.value) return resolve();
  
      Page.Variables.svUsernameCount.invoke({ input: field.value }, (data) => {
        if (data.usernameCount > 0) {
          reject({ errorMessage: "The username is already in use." });
        } else {
          resolve();
        }
      });
    });
  };
  