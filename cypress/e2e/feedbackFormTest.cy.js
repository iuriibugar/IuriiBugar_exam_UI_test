import homePage from "../support/pages/HomePage";
import {faker} from '@faker-js/faker';
import user from '../fixtures/user.json'
import { fullAutorization } from "../support/helper";
import feedbackPage from "../support/pages/FeedbackPage";


describe('Feedbackform Test', () => {
  beforeEach(() => {
    user.email = faker.internet.email({provider: 'fake.mail.com'});
    
    cy.log('Autorizing user...');
    fullAutorization(user);
    cy.url().should('include', '/#/search')  
  })
    

  it('Feedbackform Test', () => {
        
    const castomerComment = faker.lorem.words({ min: 3, max: 9 });

    cy.log('Open feedbackform...');
    homePage.getMenuButton().click();
    homePage.getFeedbackClass().click();

    cy.url().should('include', '/#/contact')  

    cy.log('Feel feedbackform...');
    feedbackPage.getCommentField().type(castomerComment);
    feedbackPage.getRatingSlider().invoke('attr', 'aria-valuenow', 4).trigger('change').click();
    feedbackPage.getCaptchaText().invoke('text').then((captchaText) => {
      const resultCaptcha = eval(captchaText);
      feedbackPage.getCaptchaControlField().type(resultCaptcha);
    });
    feedbackPage.getFeedBackSubmitButton().click();

    cy.log('Control feedbackform answer...');
    feedbackPage.getFeedBackFormAnswer().should('contain', 'Thank you for your feedback.');
  })
})