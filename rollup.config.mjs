import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import svg from "rollup-plugin-svg";
import { dts } from "rollup-plugin-dts";

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs"
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named"
      }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"]
      }),
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
    external: ["react", "react-dom", "styled-components"],
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "cjs"
      }
    ],
    plugins: [
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.stories.tsx"]
      }),
      dts()
    ]
  }
];
