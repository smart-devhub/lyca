export const amountFormater = num => {
  if (!num) return '0';

  if (typeof num === 'number') {
    return num.toLocaleString();
  }

  if (typeof num === 'string' && !isNaN(num)) {
    return parseFloat(num).toLocaleString();
  }

  return 'Invalid Number';
};
