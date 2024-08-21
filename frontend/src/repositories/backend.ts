import axios from "axios";

const BACKEND_URL = "http://localhost:3001/v1";

export async function validateCreditCard(cardNumber: string): Promise<Boolean> {
  try {
    await axios.post(`${BACKEND_URL}/credit-card`, { cardNumber });

    return true;
  } catch (error) {
    return false;
  }
}
