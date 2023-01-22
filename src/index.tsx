import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';
import { GlobalStyle } from './styles/global';
import { TypographyStyle } from './styles/typography';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle/>
        <TypographyStyle/>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
