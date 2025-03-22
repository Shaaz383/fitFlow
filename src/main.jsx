import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { WeightProvider } from './context/WeightContext'; // Import WeightProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeightProvider>
      <App />
    </WeightProvider>
  </StrictMode>,
);