import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/common.css"

import App from '../src/App';
import "../src/css/index.css";
import '@digdir/designsystemet-theme';
import '@digdir/designsystemet-css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
