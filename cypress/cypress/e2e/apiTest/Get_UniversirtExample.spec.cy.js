
/// <reference types="cypress" />

describe("University Test", () => {


    it('verify university test',()=>{



        cy.request('http://universities.hipolabs.com/search?country=India')
            .its('status')
            .should('eq', 200)





    })


    it.only('verify university test method',()=>{



        cy.request('GET','http://universities.hipolabs.com/search?country=India')
            .its('status')
            .should('eq', 200)




            //Method
            //URL --- endPoint
            //header
                //content-type
                //auth token



    })



})

