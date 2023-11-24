import BasePage from "./BasePage";

class HomePage extends BasePage{
    
    constructor(){
        super();
    }
    
    visit(){
        cy.log('Opening home page...');
        cy.visit('/');
        cy.get('.mat-button-wrapper').contains('Dismiss').click();
        cy.get('[class="cc-btn cc-dismiss"]').click();
    }
}
export default new HomePage();