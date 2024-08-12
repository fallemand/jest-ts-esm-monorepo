import type { Config } from "jest";

export const baseConfig: Config = {
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          target: "es2021",
        },
      },
    ],
  },
};
