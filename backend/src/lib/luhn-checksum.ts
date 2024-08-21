function cardNumbersToDigits(cardNumber: string): number[] {
  return cardNumber.split("").map((char: string): number => {
    const digit: number = parseInt(char);
    if (isNaN(digit)) {
      throw new Error(`Invalid character '${char}' in card number`);
    }

    return digit;
  });
}

function sumEverySecondDigit(digits: number[]): number {
  const parity = digits.length % 2;

  return digits.reduce((acc, digit, index) => {
    if (index % 2 === parity) {
      digit *= 2;
    }
    if (digit > 9) {
      digit -= 9;
    }

    return acc + digit;
  }, 0);
}

export function luhnChecksum(cardNumber: string): boolean {
  const digits: number[] = cardNumbersToDigits(cardNumber);
  const sum: number = sumEverySecondDigit(digits);

  return sum % 10 === 0;
}
