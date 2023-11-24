import BasePage from "./BasePage";

class FeedBack extends BasePage{

    constructor(){
        super();
        this.elements = {}
        this.elements.customerEmailField = '#mat-input-9';
        this.elements.commentField = '#comment';
        this.elements.captchaControlField = '#captchaControl';
        this.elements.ratingSlider = '#rating';
        this.elements.captchaText = '#captcha';
        this.elements.feedBackSubmitButton = '#submitButton';
        this.elements.feedBackFormAnswer = '[class="mat-simple-snack-bar-content"]';

        
    }

    getCustomerEmailField(){
        return cy.get(this.elements.customerEmailField)
    }
    getCommentField(){
        return cy.get(this.elements.commentField)
    }
    getCaptchaControlField(){
        return cy.get(this.elements.captchaControlField)
    }
    getFeedBackSubmitButton(){
        return cy.get(this.elements.feedBackSubmitButton)
    }
    getRatingSlider(){
        return cy.get(this.elements.ratingSlider)
    }
    getCaptchaText(){
        return cy.get(this.elements.captchaText)
    }
    getFeedBackFormAnswer(){
        return cy.get(this.elements.feedBackFormAnswer)
    }
}
export default new FeedBack();