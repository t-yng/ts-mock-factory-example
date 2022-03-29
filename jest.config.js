/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
  transform: {
    "\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/test/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/test/setup.jest.ts"],
};

module.exports = config;
