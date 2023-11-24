import homePage from "../support/pages/HomePage";
import {faker} from '@faker-js/faker';
import user from '../fixtures/user.json'
import { register } from "../support/helper";
import loginPage from "../support/pages/LoginPage";
import RegistrationPage from "../support/pages/RegistrationPage";



describe('Autorization test', () => {
  it('Autorization positiv test', () => {
    
    user.email = faker.internet.email({provider: 'fake.mail.com'});
    user.password = faker.internet.password({length: 10, memorable: false, pattern: /[A-Za-z\d!@#$%^&*()]/});
    user.motherMaidenName = faker.person.lastName();
    
    cy.log('Register user...');
    register(user);

    cy.log('Checking URL...');
    cy.url().should('include', '/login');

    cy.log('Entering into Login fields...');
    loginPage.getEmailField().type(user.email);
    loginPage.getPasswordField().type(user.password);
    loginPage.getCheckboxRememberMe().click();
    loginPage.getLoginButton().click();

    cy.log('Checking access autorization...');
    cy.url().should('include', '#/search');
    homePage.getShoppingCardButton().should('contain', ' shopping_cart ');
  })


  it('Autorization negative test', () => {
    
    user.email = faker.internet.email({provider: 'fake.mail.com'});
    user.password = faker.internet.password({length: 10, memorable: false, pattern: /[A-Za-z\d!@#$%^&*()]/});
    user.motherMaidenName = faker.person.lastName();
    
    cy.log('Register user...');
    register(user);

    user.password = "123"; // замінюємо пароль на невалідний

    cy.log('Checking URL...');
    cy.url().should('include', '/login');

    cy.log('Entering into Login fields...');
    loginPage.getEmailField().type(user.email);
    loginPage.getPasswordField().type(user.password);
    loginPage.getCheckboxRememberMe().click();
    loginPage.getLoginButton().click();

    cy.log('Checking Error massage...');
    RegistrationPage.getEmailErrorMassage().should('contain', 'Invalid email or password.');
  })
})