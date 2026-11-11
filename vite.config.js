import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub repo name (github.com/henriquelima92/henrique-portfolio).
// If you ever move to a <username>.github.io repo, set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/henrique-portfolio/',
})
