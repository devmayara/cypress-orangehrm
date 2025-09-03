/// <reference types="cypress" />

describe("OrangeHRM - Dashboard", () => {
  let users;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    // Login antes de cada teste do dashboard
    cy.get('input[name="username"]').type(users.validUser.username);
    cy.get('input[name="password"]').type(users.validUser.password, {
      log: false,
    });
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("Deve exibir os widgets principais do Dashboard", () => {
    // Valida widgets principais
    cy.contains("Time at Work").should("be.visible");
    cy.contains("My Actions").should("be.visible");
    cy.contains("Quick Launch").should("be.visible");
    cy.contains("Buzz Latest Posts").should("be.visible");
  });

  it("Deve exibir o nome do usuário logado no menu superior", () => {
    // Valida que o nome do usuário aparece no dropdown
    cy.get(".oxd-userdropdown-name")
      .should("be.visible");
  });

  it("Deve redirecionar corretamente pelos atalhos do Dashboard", () => {
    // Testa alguns atalhos
    cy.contains("Assign Leave").click();
    cy.contains("Assign Leave").should("be.visible");
    cy.go("back");

    cy.contains("My Timesheet").click();
    cy.contains("My Timesheet").should("be.visible");
  });
});
