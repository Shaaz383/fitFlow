import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { WeightProvider } from './context/WeightContext';
import { AuthProvider } from './context/AuthContext'; // Import the new AuthProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* Wrap with AuthProvider first */}
      <WeightProvider> {/* Then WeightProvider */}
        <App /> {/* Your main app component */}
      </WeightProvider>
    </AuthProvider>
  </StrictMode>,
);