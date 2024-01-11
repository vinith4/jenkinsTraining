/// <reference types="cypress" />



describe('verify Amazon app', ()=>{


    it('TC01', ()=>{

        //launch application
        cy.visit('https://www.amazon.in/')

        
        //verify application title
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.url().should('contain','amazon')

        //Identification ------ CSS
        //enter username and password

        

        cy.xpath('//input[@name="field-keywords"]').clear().type('iphone 15 pro').should('have.value', 'iphone 15 pro')
      
        //click on login button
        cy.xpath('//input[@type="submit"]').click()

         // cy.get('div[id=deliveryRefinements] input').check({force: true})
        cy.get('div[id=deliveryRefinements] input').click({force: true, multiple: true})




         
    })

})

