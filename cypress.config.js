const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://opensource-demo.orangehrmlive.com",
        supportFile: 'cypress/support/e2e.js',
        setupNodeEvents(on, config) { 
            // implement node event listeners here
        }, 
        viewportWidth: 1280,
        viewportHeight: 720,
        video: true,
        screenshotOnRunFailure: true,
    },
});
