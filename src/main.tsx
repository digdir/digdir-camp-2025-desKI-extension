import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/common.css'
import App from './App.tsx'

// Importing designsystemet here and only here
// Import local styles as needed
import '@digdir/designsystemet-theme';
import '@digdir/designsystemet-css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
