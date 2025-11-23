import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes } from './Routes';
import { ThemeProvider } from './ThemeProvider';
import './reset.css';
import './variables.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </StrictMode>,
);
