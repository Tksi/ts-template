import { builtinModules } from 'node:module';
import { defineConfig } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';
import packageJson from './package.json' with { type: 'json' };

const { dependencies = {} } = packageJson as {
  dependencies?: Record<string, string>;
};
const externalDependencies = Object.keys(dependencies).map(
  (name) =>
    new RegExp(
      `^${name.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`)}(?:/|$)`,
    ),
);

export default defineConfig({
  input: { index: './src/index.ts' },
  output: { cleanDir: true, dir: './dist', format: 'es' },
  plugins: [dts({ sourcemap: false })],
  external: [
    ...builtinModules,
    ...builtinModules.map((m) => `node:${m}`),
    ...externalDependencies,
  ],
  tsconfig: './tsconfig.json',
});
