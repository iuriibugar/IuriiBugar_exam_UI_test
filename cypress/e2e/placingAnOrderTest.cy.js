import homePage from "../support/pages/HomePage";
import {faker} from '@faker-js/faker';
import user from '../fixtures/user.json'
import productName from '../fixtures/juiceName.json'
import { fullAutorization, findProduct, placeAnOrderForGoods } from "../support/helper";
import yourBasketPage from "../support/pages/YourBasketPage";



describe('Placing an order test', () => {
  beforeEach(() => {
    user.email = faker.internet.email({provider: 'fake.mail.com'});
    user.password = faker.internet.password({length: 10, memorable: false, pattern: /[A-Za-z\d!@#$%^&*()]/});
    user.motherMaidenName = faker.person.lastName();

    user.country = faker.location.country();
    user.name = faker.person.fullName();
    user.mobNumber = faker.internet.password({length: 9, memorable: false, pattern: /\d/});
    user.zipCode = faker.number.int({ max: 8 });
    user.address = faker.location.street();
    user.city = faker.location.city();
    user.state = faker.location.state();

    user.cardNumer = faker.finance.creditCardNumber({ issuer: '63[7-9]############L' });
    user.expiryMonth = faker.number.int({ min:1, max: 12 }); // значення не спрацьовує у полі місяця випуску карти
    user.expiryYear = faker.number.int({ min: 2080, max: 2099 }); // значення не спрацьовує у полі року випуску карти

    cy.log('Autorizing user...');
    fullAutorization(user);
    cy.url().should('include', '/#/search')  
  })
    
  it('Placing an order test', () => {
        
    cy.log('Add product to the shopping store...');
    homePage.getItemsPerPageButton().click();
    homePage.getItemSummButton(36).click();
    homePage.getAddToBasketButton(productName.item1)
    homePage.getShoppingCardItemCount().invoke('text').should('contains', '1');

    cy.log('Placing an order...');
    homePage.getShoppingCardButton().click({timeout: 7000});
    cy.url().should('include', '/#/basket')

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


  })

  it('Placing an order with Find Button test', () => {

    cy.log('Finding a product through search...');
    homePage.getFindItemButton().type(`${productName.item2}{enter}`) 
    
    cy.log('Add product to the shopping store...');
    homePage.getAddToBasketButton(productName.item2)
    homePage.getShoppingCardItemCount().invoke('text').should('contains', '1');

    cy.log('Placing an order...');
    placeAnOrderForGoods(user);
  })

  it('Placing an order with Helper test', () => {

    cy.log('Add product to the shopping store using helper...');
    findProduct(productName.item3);
    homePage.getShoppingCardItemCount().invoke('text').should('contains', '1');

    cy.log('Placing an order...');
    placeAnOrderForGoods(user);   
   })
})