/// <reference types="cypress" />



describe('verify dropdown test', () => {


    it('dropdown test', () => {

        //launch application
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

       // cy.get('[name="Reported By"]').type("vinith")

        cy.get('[name="reasondummy"]').should('be.visible')

        //select single value

        cy.get('[name="reasondummy"]').type('Proof of return at airport').type(`{enter}`)

        


        //select multiple value

       // cy.get('[name="CASECF7"]').select(['USA', 'Russia', 'India'])


    })


    

})

