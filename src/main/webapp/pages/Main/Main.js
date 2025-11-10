/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

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
    Page.Widgets.headingLabel.caption = "Employee Listing"
};
Page.topnavLoad = function($event, widget) {
    Page.Widgets.topnav.Widgets.homeLink.caption = "Employees";
};

Page.HrdbEmployeeDataonBeforeDatasetReady = function(variable, data) {
    data.forEach(function(employee) {
        employee.fullName = employee.firstname + ' ' + employee.lastname;

    });

};
Page.calculateAge = function(dob) {
    var yearOfBirth = new Date(dob).getFullYear();
    var currentYear = new Date().getFullYear();
    var age = currentYear - yearOfBirth;
    return age;
};