import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: "t6r583",
    baseUrl: 'https://qa-challenge-rx.vercel.app/',
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1040,
    viewportHeight: 720,
  }
}) 