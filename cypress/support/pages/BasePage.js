export default class BasePage{
    
    constructor(){
        this.elements = {};
        this.elements.headerAccountButton = '#navbarAccount';
        this.elements.headerLoginButton = '#navbarLoginButton';
        this.elements.registerUserButton = '#newCustomerLink';
        this.elements.shoppingCardButton = '[class="mat-focus-indicator buttons mat-button mat-button-base ng-star-inserted"]';
        this.elements.shoppingCardItemCount = '[class="fa-layers-counter fa-layers-top-right fa-3x warn-notification"]';
        this.elements.findItemButton = '[class="mat-icon notranslate mat-ripple mat-search_icon-search ng-tns-c254-1 material-icons mat-ligature-font mat-icon-no-color"]';
        this.elements.itemsPerPageButton = '[class="mat-select-arrow ng-tns-c130-23"]';
        this.elements.menuButton = '[class="mat-focus-indicator mat-tooltip-trigger mat-button mat-button-base"]';
        this.elements.feedBackClass = '[class="menu-text truncate"]';
    
    }

    getHeaderAccountButton(){
        return cy.get(this.elements.headerAccountButton)
    }
    getLoginAccountButton(){
        return cy.get(this.elements.headerLoginButton)
    }
    getRegisterUserButton(){
        return cy.get(this.elements.registerUserButton)
    }
    getShoppingCardButton(){
        return cy.get(this.elements.shoppingCardButton)
    }
    getShoppingCardItemCount(){
        return cy.get(this.elements.shoppingCardItemCount)
    }
    getFindItemButton(){
        return cy.get(this.elements.findItemButton)
    }
    getItemsPerPageButton(){
        return  cy.get(this.elements.itemsPerPageButton)     
    }
    getItemSummButton(itemSumm){
        return cy.contains('[class="mat-option-text"]', itemSumm)
    }
    getAddToBasketButton(productItem){
        return cy.contains('.item-name', productItem)
               .parent()
               .parent()
               .parent()
               .find('[class="mat-button-wrapper"]')
               .click();
    }
    getMenuButton(){
        return cy.get(this.elements.menuButton)
    }
    getFeedbackClass(){
        return cy.contains(this.elements.feedBackClass, 'Customer Feedback')
    }
}