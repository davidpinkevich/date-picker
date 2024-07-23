export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.ts",
    "\\.(css|less|scss)$": "<rootDir>/mocks/fileMock.ts",
    "^assets/(.*)": "<rootDir>src/assets/$1",
    "^mocks/(.*)": "<rootDir>mocks/$1",
    "^hooks/(.*)": "<rootDir>src/hooks/$1",
    "^components/(.*)": "<rootDir>src/components/$1",
    "^styles/(.*)": "<rootDir>src/styles/$1",
    "^constants/(.*)": "<rootDir>src/constants/$1",
    "^utils/(.*)": "<rootDir>src/utils/$1"
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/*.test.(ts|tsx)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
