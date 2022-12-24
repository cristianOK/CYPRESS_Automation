const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalStudio: true,
    experimentalSessionAndOrigin: true,
   //projectId: "7a5svn"
    pageLoadTimeout: 90000,

  },
});

