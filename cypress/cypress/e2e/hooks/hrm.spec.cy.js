/// <reference types="cypress"/>

describe('nop test', () => {


    before(()=>{

        cy.log('==========before==========')
        

        

    })


    after(()=>{

        cy.log('==========after==========')


    })

    beforeEach(()=>{

        cy.log('==========beforeEach==========')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })


    afterEach(()=>{

        cy.log('==========afterEach==========')


    })

    it('enter email', ()=>{

        // cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

        cy.get('input[name="username"]').clear().type('Admin').should('have.value', 'Admin')
        cy.get('[type="password"]').clear().type('admin123').should('have.value', 'admin123')

        // cy.get('input[name="username"]').clear().type('clearValueAndEneterAgain').should('have.value', 'clearValueAndEneterAgain')


        //click on login button
        cy.get('[type*="sub"]').click()



    })

    it('verify title', ()=>{

        

      
         //verify application title
         cy.title().should('eq','OrangeHRM')
         cy.url().should('contain','login')
    })




})

