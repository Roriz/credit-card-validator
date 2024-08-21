import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreditCardForm from './credit-card-form';
import { validateCreditCard } from '../../repositories/backend';

jest.mock('../../repositories/backend');

describe('CreditCardForm', () => {
  test('when submitted, calls validateCreditCard with the card number', async () => {
    render(<CreditCardForm />);

    const cardNumber = '1234';
    const cardNumberInput = screen.getByTestId('card-number');
    fireEvent.change(cardNumberInput, { target: { value: cardNumber } });

    const form = screen.getByTestId('credit-card-form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(validateCreditCard).toHaveBeenCalledWith(cardNumber);
    });
  });

  test('when card number is valid, displays a valid message', async () => {
    (validateCreditCard as jest.Mock).mockResolvedValue(true);

    render(<CreditCardForm />);

    const cardNumber = '1234';
    const cardNumberInput = screen.getByTestId('card-number');
    fireEvent.change(cardNumberInput, { target: { value: cardNumber } });

    const form = screen.getByTestId('credit-card-form');
    fireEvent.submit(form);

    await waitFor(() => {
      const feedback: HTMLDivElement = screen.getByTestId('feedback');

      expect(feedback.className).toContain('valid');
    });
  });

  test('when card number is invalid, displays an invalid message', async () => {
    (validateCreditCard as jest.Mock).mockResolvedValue(false);

    render(<CreditCardForm />);

    const cardNumber = '12a34';
    const cardNumberInput = screen.getByTestId('card-number');
    fireEvent.change(cardNumberInput, { target: { value: cardNumber } });

    const form = screen.getByTestId('credit-card-form');
    fireEvent.submit(form);

    await waitFor(() => {
      const feedback: HTMLDivElement = screen.getByTestId('feedback');

      expect(feedback.className).toContain('invalid');
    });
  });

  test('when an unexpected error occurs, displays an error message', async () => {
    (validateCreditCard as jest.Mock).mockRejectedValue(
      new Error('An unexpected error occurred')
    );

    render(<CreditCardForm />);

    const cardNumber = '1234';
    const cardNumberInput = screen.getByTestId('card-number');
    fireEvent.change(cardNumberInput, { target: { value: cardNumber } });

    const form = screen.getByTestId('credit-card-form');
    fireEvent.submit(form);

    await waitFor(() => {
      const feedback: HTMLDivElement = screen.getByTestId('feedback');

      expect(feedback.className).toContain('invalid');
      expect(feedback.textContent).toBe('An unexpected error occurred');
    });
  });
});
