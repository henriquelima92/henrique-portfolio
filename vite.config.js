import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { contact } from './src/data/contact.js'

// Replaces %CONTACT_NAME% in index.html with the name from src/data/contact.js.
const contactHtml = () => ({
  name: 'contact-html',
  transformIndexHtml: (html) => html.replaceAll('%CONTACT_NAME%', contact.name),
})

// base must match the GitHub repo name (github.com/henriquelima92/henrique-portfolio).
// If you ever move to a <username>.github.io repo, set base to '/'.
export default defineConfig({
  plugins: [react(), contactHtml()],
  base: '/henrique-portfolio/',
})
