function getRandomInRange(min = 0, max = 100) {
  if (min >= max) {
    throw new Error('Min must be less than max');
  }

  const range = max - min + 1;
  const randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
  return min + (randomValue % range);
}

function getRandomNumber(max) {
  const randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
  return randomValue % max; // Generates a number between 0 and max number
}

export { getRandomInRange, getRandomNumber };
