import { defineConfig } from 'vite'

import babel from 'rollup-plugin-babel';
import progress from 'rollup-plugin-progress';

import buildOptions from './vitejs/buildOptions.js';
import serverOptions from './vitejs/serverOptions.js';
import vitePlugins from './vitejs/vitePlugins.js';


export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    publicDir: 'public',
    build: buildOptions,
    server: serverOptions,
    plugins: vitePlugins,
  }
})
