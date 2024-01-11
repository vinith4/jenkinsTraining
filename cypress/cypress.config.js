const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r3qmzk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
