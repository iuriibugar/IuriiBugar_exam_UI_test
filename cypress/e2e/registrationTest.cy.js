import homePage from "../support/pages/HomePage";
import registrationPage from "../support/pages/RegistrationPage";
import {faker} from '@faker-js/faker';
import user from '../fixtures/user.json'



describe('Registration test', () => {
  it('Registration positiv test', () => {
    
    user.email = faker.internet.email({provider: 'fake.mail.com'});
    user.password = faker.internet.password({length: 10, memorable: false, pattern: /[A-Za-z\d!@#$%^&*()]/});
    user.motherMaidenName = faker.person.lastName();
    
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
  })


  it('Registration negative test', () => {
    
    user.email = faker.person.firstName(); //не валідний email
    user.password = faker.internet.password({length: 10, memorable: false, pattern: /[A-Za-z\d!@#$%^&*()]/}); 
    user.motherMaidenName = faker.person.lastName();
    
    cy.log('Openning Home Page...');
    homePage.visit();

    cy.log('Openning Registration form...');
    homePage.getHeaderAccountButton().click();
    homePage.getLoginAccountButton().click({ force: true });
    homePage.getRegisterUserButton().click();

    cy.log('Fill a registration fields...');
    registrationPage.fillRegistrationFields(user);

    cy.log('Checking errors in email field...');
    registrationPage.getErrorEmailAdressText().contains('Email address is not valid.');
  })
})