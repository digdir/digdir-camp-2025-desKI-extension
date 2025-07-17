import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from '../src/App';
import '../src/css/index.css';
import './styles/common.css';
import '@digdir/designsystemet-theme';
import '@digdir/designsystemet-css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);

