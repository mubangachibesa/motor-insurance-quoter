// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QuoteWizard from './pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuoteWizard />
  </React.StrictMode>,
);
