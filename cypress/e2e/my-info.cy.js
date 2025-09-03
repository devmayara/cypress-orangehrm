/// <reference types="cypress" />

describe("OrangeHRM - My Info", () => {
  let users;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    cy.get('input[name="username"]').type(users.validUser.username);
    cy.get('input[name="password"]').type(users.validUser.password, {
      log: false,
    });
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");

    // Navega para My Info
    cy.get(".oxd-sidepanel").contains("My Info").click();
    cy.url().should("include", "/viewPersonalDetails");
  });

  it("Deve exibir os dados pessoais do usuário", () => {
    cy.get('input[name="firstName"]');
    cy.get('input[name="lastName"]');
  });
});
