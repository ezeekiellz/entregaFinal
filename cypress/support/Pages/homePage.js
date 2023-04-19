export class HomePage {

    constructor () {
        this.todolist = 'To Do List';
        this.waits = 'Waits';
        this.alerts = 'Alerts';
        this.formutils = 'Form Utils';
        this.onlineshop = 'Online Shop';
        this.fileupload = 'File Upload';
    };

    clickTodolist () {
        cy.contains(this.todolist).click();
    };

    clickWaits () {
        cy.contains(this.waits).click();
    };

    clickAlerts () {
        cy.contains(this.alerts).click();
    };

    clickFormUtils () {
        cy.contains(this.formutils).click();
    };

    clickOnlineshop () {
        cy.contains(this.onlineshop).click();
    };

    clickFileupload () {
        cy.contains(this.fileupload).click();
    };
};