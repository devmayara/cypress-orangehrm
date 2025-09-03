/// <reference types="cypress" />

describe("OrangeHRM - User Management", () => {
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

    // Navega para Admin > User Management
    cy.get(".oxd-sidepanel").contains("Admin").click();
    cy.url().should("include", "/admin/viewSystemUsers");
  });

  it("Deve exibir a listagem de usuários", () => {
    cy.get(".oxd-table").should("be.visible");
    cy.get(".oxd-table-card").should("have.length.greaterThan", 0);
  });

  it("Deve criar um novo usuário", () => {
    cy.get('button[type="button"]').contains("Add").click();

    // Preenche formulário de novo usuário
    cy.get(".oxd-select-text-input").eq(0).click();
    cy.get(".oxd-select-dropdown").contains("Admin").click();

    cy.get(".oxd-select-text-input").eq(1).click();
    cy.get(".oxd-select-dropdown").contains("Enabled").click();

    cy.get('input[placeholder="Type for hints..."]').type("John");
    cy.wait(1000);
    cy.get('.dropdown-options li, .suggestions li, [role="option"]')
      .first()
      .click();

    cy.get(".oxd-input-group > :nth-child(2) > .oxd-input")
      .first()
      .type(users.newUser.username);
    cy.get('input[type="password"]').eq(0).type(users.newUser.password);
    cy.get('input[type="password"]').eq(1).type(users.newUser.password);

    cy.get('button[type="submit"]').click();

    // Valida mensagem de sucesso
    cy.contains("Successfully Saved").should("be.visible");
  });

  it("Deve editar um usuário existente", () => {
    // Encontra e edita o primeiro usuário da lista
    cy.get(".oxd-table-card").first().find(".oxd-icon-button").eq(1).click();

    // Altera o status para disabled
    cy.get(".oxd-select-text-input").eq(1).click();
    cy.get(".oxd-select-dropdown").contains("Disabled").click();

    cy.get('button[type="submit"]').click();

    // Valida mensagem de sucesso
    cy.contains("Successfully Updated").should("be.visible");
  });
});
