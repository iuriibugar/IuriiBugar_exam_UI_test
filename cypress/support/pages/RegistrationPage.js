import BasePage from "./BasePage";

class RegistrationPage extends BasePage{

    constructor(){
        super();
        this.elements = {}
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.repeatPasswordField = '#repeatPasswordControl';
        this.elements.securityQuationDropdown = '#mat-select-value-3';
        this.elements.mothersMaidenField = '#mat-option-4';
        this.elements.securityAnswer = '#securityAnswerControl';
        this.elements.registerButton = '#registerButton';
        this.elements.errorEmailAdressText = '#mat-error-7';
        this.elements.emailErrorMassage ='[class="error ng-star-inserted"]';  
    }

    getEmailField(){
        return cy.get(this.elements.emailField)
    }
    getPasswordField(){
        return cy.get(this.elements.passwordField)
    }
    getRepeatPasswordField(){
        return cy.get(this.elements.repeatPasswordField)
    }
    getSecurityQuationDropdown(){
        return cy.get(this.elements.securityQuationDropdown)
    }
    getMothersMaidenField(){
        return cy.get(this.elements.mothersMaidenField)
    }
    getSecurityAnswer(){
        return cy.get(this.elements.securityAnswer)
    }
    getRegisterButton(){
        return cy.get(this.elements.registerButton)
    }
    getErrorEmailAdressText(){
        return cy.get(this.elements.errorEmailAdressText)
    }

    fillRegistrationFields(user){
        this.getEmailField({timeout: 5000}).type(user.email);
        this.getPasswordField().type(user.password);
        this.getRepeatPasswordField().type(user.password);
        this.getSecurityQuationDropdown().click();
        this.getMothersMaidenField().click();
        this.getSecurityAnswer().type(user.motherMaidenName);     
    }
    clickRegistrationFields(){
        this.getRegisterButton().click();      
    }
    getEmailErrorMassage(){
        return cy.get(this.elements.emailErrorMassage)
    }
}
export default new RegistrationPage();