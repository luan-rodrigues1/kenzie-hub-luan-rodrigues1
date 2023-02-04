import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';
import { AuthProvider } from './contexts/AuthContext';
import { TechProvider } from './contexts/TechContext';
import { GlobalStyle } from './styles/global';
import { TypographyStyle } from './styles/typography';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
          <AuthProvider>
            <TechProvider>
              <GlobalStyle/>
              <TypographyStyle/>
              <App />
              <ToastContainer
                autoClose={1700}
                theme="dark"
              />
            </TechProvider>
          </AuthProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
