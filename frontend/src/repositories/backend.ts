import axios, { AxiosError } from 'axios';

const BACKEND_URL = 'http://localhost:3001/v1';

const EXPECTED_ERROR_CODES = [
  'credit-card/invalid-characters',
  'credit-card/card-is-invalid',
];

export async function validateCreditCard(cardNumber: string): Promise<Boolean> {
  try {
    await axios.post(`${BACKEND_URL}/credit-card`, { cardNumber });

    return true;
  } catch (error: any) {
    if (
      error.response?.data?.errors?.every(
        (e: AxiosError) => e.code && EXPECTED_ERROR_CODES.includes(e.code)
      )
    ) {
      return false;
    }
    throw error;
  }
}
