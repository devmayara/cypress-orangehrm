/// <reference types="cypress" />

describe("OrangeHRM - Fluxos de Login", () => {
  let users;

  before(() => {
    // Carrega os dados de usuário do fixture antes de todos os testes
    cy.fixture("users").then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    // Visita a página inicial antes de cada teste
    cy.visit("/");
  });

  it("Deve realizar login com credenciais válidas", () => {
    cy.get('input[name="username"]').type(users.validUser.username);
    cy.get('input[name="password"]').type(users.validUser.password, {
      log: false,
    }); // oculta no log
    cy.get('button[type="submit"]').click();

    // Valida se o dashboard é exibido corretamente
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  });

  it("Não deve realizar login com credenciais inválidas", () => {
    cy.get('input[name="username"]').type(users.invalidUser.username);
    cy.get('input[name="password"]').type(users.invalidUser.password, {
      log: false,
    });
    cy.get('button[type="submit"]').click();

    // Valida mensagem de erro
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("Não deve realizar login quando os campos estiverem vazios", () => {
    cy.get('button[type="submit"]').click();

    // Valida mensagens de campo obrigatório
    cy.get(".oxd-input-group__message").should("contain", "Required");
  });
});
