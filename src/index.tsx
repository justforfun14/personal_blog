import React from 'react'
import App from 'components/App/App'

import { createRoot } from 'react-dom/client'
import './normalize.css'
import './index.scss'
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById('root')
if (!rootElement)
  throw new Error('Failed to find the root element')
const root = createRoot(rootElement)
root.render(<App />)
