import loginPage from "../support/pages/LoginPage";
import homePage from "../support/pages/HomePage";
import registrationPage from "../support/pages/RegistrationPage";
import yourBasketPage from "../support/pages/YourBasketPage";


export function register(user){
    homePage.visit();

    cy.get('#navbarAccount').click();
    cy.get('#navbarLoginButton').click();

    cy.get('#newCustomerLink').click();

    cy.get('#emailControl').type(user.email);
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.password);
    cy.get('#mat-select-value-3').click();
    cy.get('#mat-option-4').click();
    cy.get('#securityAnswerControl').type(user.motherMaidenName);
    cy.get('#registerButton').click();
}

export function fullAutorization(user){
    
    cy.log('Openning Home Page...');
    homePage.visit();

    cy.log('Openning Registration form...');
    homePage.getHeaderAccountButton().click();
    homePage.getLoginAccountButton().click({ force: true });
    homePage.getRegisterUserButton().click();

    cy.log('Fill a registration fields...');
    registrationPage.fillRegistrationFields(user);
    registrationPage.clickRegistrationFields();

    cy.log('Checking URL...');
    cy.url().should('include', '/login');

    cy.log('Entering into Login fields...');
    loginPage.getEmailField().type(user.email);
    loginPage.getPasswordField().type(user.password);
    loginPage.getCheckboxRememberMe().click();
    loginPage.getLoginButton().click();
}

export function findProduct(productName) {
    cy.get('body').then((body) => {
        const itemName = body.find(`.item-name:contains('${productName}')`)
        if (itemName.length > 0) {
            cy.get(`.item-name:contains('${productName}')`).parent().parent().parent().find('[class="mat-button-wrapper"]').click({timeout: 7000});
        } else {
            cy.get('[aria-label="Next page"]').then(nextPage => {
                if (nextPage.attr('aria-disabled') === 'true') {
                } else {
                    cy.get('[aria-label="Next page"]').should('be.enabled').click({ force: true });
                    findProduct(productName);
                }
            })
        }
    })
}

export function placeAnOrderForGoods (user){
    cy.log('Placing an order...');
    homePage.getShoppingCardButton().click();

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      yourBasketPage.getCheckoutButton(null).then(() => {
        return delay(3500);
      }).then(() => {
        yourBasketPage.getCheckoutButton().click({force: true});
      });
      
    yourBasketPage.getAddNewAdressButton().click();

    cy.log('Adding new adress...');
    yourBasketPage.getCountryField().type(user.country);
    yourBasketPage.getNameField().type(user.name);
    yourBasketPage.getMobNumberField().type(user.mobNumber);
    yourBasketPage.getZipCodeField().type(user.zipCode)
    yourBasketPage.getAddressField().type(user.address);
    yourBasketPage.getCityField().type(user.city);
    yourBasketPage.getStateField().type(user.state);
    yourBasketPage.getSubmitButton().click();

    cy.log('Select an adress...');
    yourBasketPage.getSelectAdressRadiobutton().click();
    yourBasketPage.getContinueButton().click();

    cy.log('Select a delivery speed...');
    yourBasketPage.getOneDayDeliveryRadiobutton().click();
    yourBasketPage.getContinueDeliverySpeedButton().click();

    cy.log('Select Payment Options...');
    yourBasketPage.getAddNewCardDropdownButton().click();
    yourBasketPage.getCardNameField().type(user.name);
    yourBasketPage.getCardNumberField().type(user.cardNumer);
    yourBasketPage.getCardMounthDropdownButton().select('5');
    yourBasketPage.getCardYearDropdownButton().select('2085');
    yourBasketPage.getPaymentOptionsSubmitButton().click();

    cy.log('Select My Payment Options...');
    yourBasketPage.getMyPaymentOptionsCardRadiobutton().click();
    yourBasketPage.getMyPaymentOptionsContinueButton().click();

    cy.log('Placying order...');
    yourBasketPage.getCheckoutButton().click();

    cy.log('Checking order status...');
    yourBasketPage.getConfirmationText().should('contain', 'Thank you for your purchase!')
}