import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import TailwindCSS setup here

// Render the React app into the root DOM element
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);