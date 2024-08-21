import React, { useState } from 'react';
import './credit-card-form.css';

const CreditCardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCardNumber('');
    setFeedback('Mocked API call successful');
  };

  return (
    <div className="CreditCardForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {feedback && <p>{feedback}</p>}
    </div>
  );
}

export default CreditCardForm;
