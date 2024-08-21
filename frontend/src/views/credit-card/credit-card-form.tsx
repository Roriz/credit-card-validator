import React, { useState } from 'react';
import './credit-card-form.css';

import { validateCreditCard } from '../../repositories/backend';

const CreditCardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberValid, setCardNumberValid] = useState<Boolean | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valid = await validateCreditCard(cardNumber);
    setCardNumberValid(valid)
    setCardNumber('');
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value)
    setCardNumberValid(undefined)
  };

  return (
    <div className="credit-card-form">
      <form onSubmit={handleSubmit} data-testid="credit-card-form">
        <div className="credit-card-form__inline">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            data-testid="card-number"
            required
          />
        </div>
        
        <div className="credit-card-form__inline">
          <button type="submit">Submit</button>
        </div>
      </form>

      {cardNumberValid !== undefined && (
        <div
          className={`credit-card-form__feedback ${cardNumberValid ? 'valid' : 'invalid'}`}
          data-testid="feedback"
        >
          {cardNumberValid ? 'Card number is valid' : 'Card number is invalid'}
        </div>
      )}
    </div>
  );
}

export default CreditCardForm;
