import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";
import alias from "@rollup/plugin-alias";

const path = ["components", "utils"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/index.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "build/index.es.js",
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      modules: true,
      use: ["sass"],
      minimize: true
    }),
    url(),
    alias({
      entries: path.map((item) => ({
        find: `@${item}`,
        replacement: `./src/${item}`
      }))
    })
  ]
};
