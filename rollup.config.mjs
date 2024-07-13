import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import svg from "rollup-plugin-svg";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "cjs"
      },
      {
        file: packageJson.main,
        format: "esm"
      }
    ],
    external: ["react"],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.stories.tsx"]
      }),
      resolve({
        extensions: [
          ".mjs",
          ".js",
          ".json",
          ".node",
          ".jsx",
          ".tsx",
          ".ts",
          ".svg"
        ]
      }),
      svg(),
      terser()
    ],
    external: ["react", "react-dom", "styled-components"]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts.default()]
  }
];
