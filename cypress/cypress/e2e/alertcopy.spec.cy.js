/// <reference types="cypress" />

describe("verify HRM App", () => {
  it("Alert - simple alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //generate an alert
    cy.get('[onclick="jsAlert()"]').click();
    //hanle alert -----cypress ---automatically handle an alert -----perform OK button on alert
  });

  it("Alert - confirm alert - click OK bydefault", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //generate an alert
    cy.get('[onclick="jsAlert()"]').click();
    //hanle alert -----cypress ---automatically handle an alert -----perform OK button on alert

    //validation step
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("Alert - confirm alert - click Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //generate an alert
    cy.get('[onclick="jsConfirm()"]').click();
    //hanle alert -----cypress ---automatically handle an alert -----perform OK button on alert

    cy.on("window:confirm", () => false); //click on cancel button

    //validation step
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("Alert - confirm alert - click Cancel and validate", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //generate an alert
    cy.get('[onclick="jsAlert()"]').click();
    //hanle alert -----cypress ---automatically handle an alert -----perform OK button on alert

    cy.on("window:confirm", (alert) => {
      expect(alert).to.contain("Press 'OK' or 'Cancel' button!");

      //true---- click on OK button
    }); //click on cancel button

  //validation step
  cy.get("#result").should("have.text", "You successfully clicked an alert");
    });
});
