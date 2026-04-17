import { builtinModules } from 'node:module';
import { defineConfig } from 'rolldown';
import { dts } from 'rolldown-plugin-dts';

export default defineConfig({
  input: { index: './src/index.ts' },
  output: { cleanDir: true, dir: './dist', format: 'es' },
  plugins: [dts({ sourcemap: false })],
  external: [...builtinModules, ...builtinModules.map((m) => `node:${m}`)],
  tsconfig: './tsconfig.json',
});
