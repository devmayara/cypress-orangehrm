# 🧪 Cypress E2E Tests - OrangeHRM Demo

Este projeto contém uma suíte de testes automatizados **E2E (End-to-End)** desenvolvida com [Cypress](https://www.cypress.io/), utilizando o site de demonstração do [OrangeHRM](https://opensource-demo.orangehrmlive.com/) como aplicação alvo.  
O objetivo é validar fluxos críticos da aplicação, como **login e autenticação**, de forma automatizada e escalável.

---

## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Mocha](https://mochajs.org/) (engine de testes)
- [Chai](https://www.chaijs.com/) (assertions)

---

## 📂 Estrutura de pastas

```
cypress/
  e2e/                 # Testes end-to-end organizados por fluxo/tela
    login.cy.js        # Cenários de autenticação (login)
  fixtures/            # Massa de dados estática para simulações
    users.json         # Usuários válidos e inválidos para os testes
  support/             # Suporte e customizações globais do Cypress
    commands.js        # Definição de comandos customizados (ex: cy.login)
cypress.config.js      # Configuração global do Cypress (baseUrl, viewport, etc.)
package.json           # Dependências, scripts e metadados do projeto
```
---

## ⚙️ Configuração do projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/devmayara/cypress-orangehrm.git
cd cypress-orangehrm
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Abrir Cypress no modo interativo
```bash
npx cypress open
```

### 4. Rodar os testes no modo headless
```bash
npx cypress run
```

---

## ✅ Casos de teste implementados

- Login com credenciais válidas → valida acesso ao dashboard.
- Login com credenciais inválidas → valida mensagem de erro.
- Login com campos vazios → valida mensagens obrigatórias.
