import BasePage from "./BasePage";

class YourBasketPage extends BasePage{

    constructor(){
        super();
        this.elements = {}
        this.elements.checkoutButton = '#checkoutButton';
        this.elements.addNewAdressButton = '[class="mat-focus-indicator btn btn-new-address mat-button mat-raised-button mat-button-base mat-primary"]'
        this.elements.countryField = '#mat-input-9';
        this.elements.nameField = '#mat-input-10';
        this.elements.mobNumberField = '#mat-input-11';
        this.elements.zipCodeField = '#mat-input-12';
        this.elements.addressField = '#address';
        this.elements.cityField = '#mat-input-14';
        this.elements.stateField = '#mat-input-15';
        this.elements.submitButton = '#submitButton';
        this.elements.selectAdressRadiobutton = '[class="mat-radio-label"]';
        this.elements.continueButton = '[aria-label="Proceed to payment selection"]';
        this.elements.oneDayDeliveryRadiobutton = '#mat-radio-41';
        this.elements.continueDeliverySpeedButton = '[aria-label="Proceed to delivery method selection"]';
        this.elements.addNewCardDropdownButton = '[class="mat-expansion-panel-header-description ng-tns-c150-34"]';
        this.elements.cardNameField = '#mat-input-16';
        this.elements.cardNumberField = '#mat-input-17';
        this.elements.cardMounthDropdownButton = '#mat-input-18';
        this.elements.cardYearDropdownButton = '#mat-input-19';
        this.elements.paymentOptionsSubmitButton = '#submitButton';
        this.elements.myPaymentOptionsCardRadiobutton = '#mat-radio-44';
        this.elements.myPaymentOptionsContinueButton = '[aria-label="Proceed to review"]';
        this.elements.checkoutButton2 = '#checkoutButton';
        this.elements.confirmationText = '[class="confirmation"]';
    }

    getCheckoutButton() {
        return cy.wrap(this.elements.checkoutButton)
    }
    getAddNewAdressButton() {
        return cy.get(this.elements.addNewAdressButton)
    }
    getCountryField() {
        return cy.get(this.elements.countryField)
    }
    getNameField() {
        return cy.get(this.elements.nameField)
    }
    getMobNumberField() {
        return cy.get(this.elements.mobNumberField)
    }
    getZipCodeField() {
        return cy.get(this.elements.zipCodeField)
    }
    getAddressField() {
        return cy.get(this.elements.addressField)
    }
    getCityField() {
        return cy.get(this.elements.cityField)
    }
    getStateField() {
        return cy.get(this.elements.stateField)
    }
    getSubmitButton() {
        return cy.get(this.elements.submitButton)
    }
    getSelectAdressRadiobutton() {
        return cy.get(this.elements.selectAdressRadiobutton)
    }
    getContinueButton() {
        return cy.get(this.elements.continueButton)
    }
    getOneDayDeliveryRadiobutton() {
        return cy.get(this.elements.oneDayDeliveryRadiobutton)
    }
    getContinueDeliverySpeedButton() {
        return cy.get(this.elements.continueDeliverySpeedButton)
    }
    getAddNewCardDropdownButton() {
        return cy.get(this.elements.addNewCardDropdownButton)
    }
    getCardNameField() {
        return cy.get(this.elements.cardNameField)
    }
    getCardNumberField() {
        return cy.get(this.elements.cardNumberField)
    }
    getCardMounthDropdownButton() {
        return cy.get(this.elements.cardMounthDropdownButton)
    }
    getCardYearDropdownButton() {
        return cy.get(this.elements.cardYearDropdownButton)
    }
    getPaymentOptionsSubmitButton() {
        return cy.get(this.elements.paymentOptionsSubmitButton)
    }
    getMyPaymentOptionsCardRadiobutton() {
        return cy.get(this.elements.myPaymentOptionsCardRadiobutton)
    }
    getMyPaymentOptionsContinueButton() {
        return cy.get(this.elements.myPaymentOptionsContinueButton)
    }
    getCheckoutButton() {
        return cy.get(this.elements.checkoutButton2)
    }
    getConfirmationText() {
        return cy.get(this.elements.confirmationText)
    }
}
export default new YourBasketPage();