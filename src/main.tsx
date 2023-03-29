import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Footer, NavBar } from './components';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>
);
