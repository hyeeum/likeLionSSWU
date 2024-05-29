import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root')); {/* index.html 의 div # root */}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);