import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind CSS styles
import './styles/globals.css';
import './styles/components.css';
import './styles/dark-mode.css';
import './styles/layout.css';
import './styles/theme.css';
import './styles/responsive.css';
import { ScrollSpyProvider } from "./context/scrollspyprovider";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScrollSpyProvider>
    <App />
    </ScrollSpyProvider>
  </React.StrictMode>,
);
