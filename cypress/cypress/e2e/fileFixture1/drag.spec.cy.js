/// <reference types="cypress" />

import 'cypress-file-upload';


//reference url - https://www.npmjs.com/package/cypress-file-upload


describe('verify drag drop test', () => {



    it('dragdropTest', ()=>{


        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')



        cy.get('[name="upfile"]').should('be.visible')            



        //install packge "file-upload"
         cy.get('[name="upfile"]').attachFile('sample.txt')     //take file from fixture

       // cy.get('div#drag-drop-upload').attachFile('array.pdf', { subjectType: 'drag-n-drop' })     //take file from fixture

       cy.get(' [value="Press"]').click()          

      
         //attach multiple file upload 
        //cy.get('div#drag-drop-upload').attachFile(['array.pdf','sample.txt'], { subjectType: 'drag-n-drop' })     //take file from fixture



        cy.wait(3000)



    })



})


