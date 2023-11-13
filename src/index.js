import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./global.css";
// 1. Panem elementu no index.html
const noDOM = document.getElementById("root");

// 2. Parvers realo elementu par React sakni 
const root = ReactDOM.createRoot(noDOM);

// 3. React sakne render pirmo komponenti (App)
root.render(<App />);