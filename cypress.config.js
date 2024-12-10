const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'prs7r6',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle:'Projeto de automação curso Cypress',
      reportPageTitle: 'Projeto de automação curso Cypress'
    },
    baseUrl:"https://automationpratice.com.br/",
    defaultCommandTimeout:5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
