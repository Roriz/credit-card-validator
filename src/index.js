import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CreditCardForm from './views/credit-card/credit-card-form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreditCardForm />
  </React.StrictMode>
);
