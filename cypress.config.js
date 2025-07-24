const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://currency-new-converter.netlify.app/',
    screenshotOnRunFailure: false, // Desabilitar screenshots para não atrapalhar o log
    watchForFileChanges: true, // Habilita a observação de alterações no arquivo
    experimentalSessionAndOrigin: true, // Habilita o suporte experimental para sessões e origens
    video: true, // Habilita a gravação de vídeos dos testes
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}' // Inclui os testes .cy.ts ou .spec.ts
  }
});
