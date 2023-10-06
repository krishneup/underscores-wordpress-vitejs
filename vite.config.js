import { defineConfig } from 'vite'
import path from 'path';
import fs from 'fs';
import babel from 'rollup-plugin-babel';
import progress from 'rollup-plugin-progress';

let pluginOptions = [
    progress(),
    babel({
      exclude: 'node_modules/**',
    }),
    iifeWrapper(),
];

export default defineConfig(({ command, mode, ssrBuild }) => {
    const config = {
        server: {
            port: 3000,
            open: true,
        },
        build: {
            rollupOptions: {
              input: {
                ...generateEntrypoints('./public/js/entrypoints'),
                ...generateEntrypoints('./public/scss/entrypoints'),
              },
              output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
                format: 'es',
              },
              plugins: pluginOptions,
            },
            emptyOutDir: true,
            copyPublicDir: false,
            assetsDir: 'assets',
        },
    }

    return config
})


function generateEntrypoints(directory) {
    const entrypoints = {};
  
    const files = fs.readdirSync(directory);
  
    for (const file of files) {
      if (file.endsWith('.js')) {
        const name = path.basename(file, '.js');
        entrypoints[name] = path.resolve(directory, file);
      }

      if (file.endsWith('.scss')) {
        const name = path.basename(file, '.scss');
        entrypoints[name] = path.resolve(directory, file);
      }
    }
  
    return entrypoints;
}


function iifeWrapper() {
    return {
      name: 'iife-wrapper',
      renderChunk(code, chunk, options) {
        // Check if the chunk is an entry point
        if (chunk.isEntry) {
          // Wrap the code in an IIFE with strict mode
          const wrappedCode = `(function() { "use strict";\n${code}\n})();`;
          return {
            code: wrappedCode,
            map: null, // You can handle source maps here if needed
          };
        }
        return null;
      },
    };
}
