/// <reference types="cypress" />



describe('HRM App', ()=>{


    it('verify login feature', ()=>{

        //launch application
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        
        //verify application title
        cy.title().should('eq','OrangeHRM')
        cy.url().should('contain','login')

        //Identification ------ CSS
        //enter username and password

        cy.get('input[name="username"]').clear().type('Admin').should('have.value', 'Admin')
        cy.get('[type="password"]').clear().type('admin123').should('have.value', 'admin123')

        // cy.get('input[name="username"]').clear().type('clearValueAndEneterAgain').should('have.value', 'clearValueAndEneterAgain')


        //click on login button
        cy.get('[type*="sub"]').click()

         //verify application title
         cy.title().should('eq','OrangeHRM')
         cy.url().should('contain','dashboard')

        //verify Dashboard is present 
         cy.xpath('//span[text()="Dashboard"]').should('be.visible')
         cy.xpath('//span[text()="Dashboard"]').should('contain','Dashboard')

         //To Logout
         cy.get('i.oxd-userdropdown-icon').click()
         cy.wait(1000)
         cy.get("[href='/web/index.php/auth/logout']").click()



          //verify application title
          cy.title().should('eq','OrangeHRM')

          //TO take Screenshot
          cy.screenshot()



    })

})

