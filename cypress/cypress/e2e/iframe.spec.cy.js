/// <reference types="cypress" />



describe('verify frame test', () => {



    it.skip('frame test', ()=>{


        cy.visit('https://the-internet.herokuapp.com/iframe')


        const myFrame = cy.get('#mce_0_ifr')
                            .its('0.contentDocument.body')
                            .should('be.visible')
                            .then( cy.wrap )




        myFrame.clear().type('Welcome you all in today session !!').type('{ctrl}A')


        //click on bold button inside frame
        cy.get('[title="Bold"]').click()
        cy.get('[title="Align center"]').click()


    })





    it.skip('frame test ---- custom code', ()=>{


        cy.visit('https://the-internet.herokuapp.com/iframe')


        const myFrame = cy.custom_frame('#mce_0_ifr')

         //click on bold button inside frame
         cy.get('[title="Bold"]').click()

        myFrame.clear().type('Welcome you all in today session !!') 


       

        cy.get('[title="Align center"]').click()

    })

    it.only('frame test', ()=>{


        cy.visit('https://the-internet.herokuapp.com/iframe')


        

        //plugin

      //  cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type('Welcome you all in today session !!').type('{ctrl}A')

        // myFrame.clear().type('Welcome you all in today session !!').type('{ctrl}A')


        //click on bold button inside frame
        cy.get('[title="Bold"]').click()
        cy.get('[title="Italic"]').click()


    })

    



})




