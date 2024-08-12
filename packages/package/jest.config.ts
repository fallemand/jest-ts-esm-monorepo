/**
 * Importing the config from a different package doesn't work
 * Error: Jest: Failed to parse the TypeScript config file /Users/facundo.allemand/projects/jest-esmodules/packages/package/jest.config.ts
   Error: Must use import to load ES Module: /Users/facundo.allemand/projects/jest-esmodules/packages/testing/jest.config.base.ts
 */
import { baseConfig } from "@tfe/testing/jest.config.base";
export default baseConfig;


// This works
// export default {
//   extensionsToTreatAsEsm: [".ts"],
//   transform: {
//     "^.+\\.(t|j)sx?$": [
//       "@swc/jest",
//       {
//         jsc: {
//           target: "es2021",
//         },
//       },
//     ],
//   },
// };
