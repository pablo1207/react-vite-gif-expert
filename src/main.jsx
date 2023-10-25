import React from 'react';
import ReactDOM from 'react-dom/client';
import GiftExpertApp from './GiftExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftExpertApp />
  </React.StrictMode>,
)

// <React.StrictMode> Este solo se aplica en Desarrollo, ayuda a determinar que todo funcione como se espera