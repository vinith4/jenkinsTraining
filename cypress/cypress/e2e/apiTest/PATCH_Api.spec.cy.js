/// <reference types="cypress" />

describe("Create Tourist Test", () => {

    it('Patch - create Tourist', () => {
      //  cy.visit('http://localhost:3000')

        console.log('***************' +Math.random().toString(5).substring(2));


        let resquestBody = {
           
            "first_name": "vinithkumar"
                            }


        cy.request({

            method: 'PATCH',
            url: ' https://reqres.in/api/users/2',
            body: resquestBody



        }).then( (resp)=>{


            //validation step

            console.log(resp.body);
           expect(resp.status).to.eq(200)              //verify status code ---201

          
            expect(resp.body.first_name).to.eq(resquestBody.first_name) 
         
        })




    })




})