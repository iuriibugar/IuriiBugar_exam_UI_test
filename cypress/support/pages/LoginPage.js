import BasePage from "./BasePage";

class LoginPage extends BasePage{

    constructor(){
        super();
        this.elements = {}
        this.elements.emailField = '#email';
        this.elements.passwordField = '#password';
        this.elements.checkboxRememberMe = '[class="mat-checkbox-inner-container"]';
        this.elements.loginButton = '#loginButton'
        
    }

    getEmailField(){
        return cy.get(this.elements.emailField)
    }
    getPasswordField(){
        return cy.get(this.elements.passwordField)
    }
    getCheckboxRememberMe(){
        return cy.get(this.elements.checkboxRememberMe)
    }
    getLoginButton(){
        return cy.get(this.elements.loginButton)
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
        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.getRepeatPasswordField().type(user.password);
        this.getSecurityQuationDropdown().click();
        this.getMothersMaidenField().click();
        this.getSecurityAnswer().type(user.motherMaidenName);     
    }
    clickRegistrationFields(){
        this.getRegisterButton().click();      
    }
}
export default new LoginPage();