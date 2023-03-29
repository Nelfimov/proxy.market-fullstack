import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavBar } from './components/navbar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);
