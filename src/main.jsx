import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// HashRouter is used (URLs look like /#/projects) instead of BrowserRouter
// because GitHub Pages serves static files only — there's no server to redirect
// deep links like /projects back to index.html on a hard refresh. HashRouter
// sidesteps that problem entirely with zero extra config.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
