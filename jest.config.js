module.exports = {
  testEnvironment: 'node',
  testTimeout: 60000,
  testMatch: [
    '**/__tests__/integration/tests/**/*.test.[jt]s?(x)',
    '**/__tests__/unit/**/*.test.[jt]s?(x)',
  ],
  moduleNameMapper: {
    '^__tests__/(.*)$': '<rootDir>/__tests__/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
  },
};
