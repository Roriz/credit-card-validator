function cardNumbersToDigits(cardNumber: string): number[] {
  return cardNumber.split('').reverse().map((char: string): number => {
    const digit: number = parseInt(char);
    if (isNaN(digit)) {
      throw new Error(`Invalid character '${char}' in card number`);
    }

    return digit;
  });
}

function sumEverySecondDigit(digits: number[]): number {
  return digits.reduce((accumulator: number, digit: number, index: number): number => {
    return index % 2 === 1 ? accumulator + digit : accumulator;
  }, 0);
}

export function luhnChecksum(cardNumber: string): boolean {
  const digits: number[] = cardNumbersToDigits(cardNumber);
  const sum: number = sumEverySecondDigit(digits);
  return sum % 10 === 0;
}
