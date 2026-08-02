import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change 'REPO_NAME' below to the exact name of your GitHub repository.
// e.g. if your repo is github.com/yourname/portfolio, set base to '/portfolio/'
// If you deploy to <username>.github.io (a "user site" repo), set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME/',
})
