/// <reference types="cypress" />

describe("Create Tourist Test", () => {

    it('Delete - create Tourist', () => {
      //  cy.visit('http://localhost:3000')

        console.log('***************' +Math.random().toString(5).substring(2));


      
        cy.request({

            method: 'DELETE',
            url: ' https://reqres.in/api/users/2',
           



        }).then( (resp)=>{


            //validation step

            console.log(resp.body);
           expect(resp.status).to.eq(204)              //verify status code ---201

          
         
         
        })




    })




})