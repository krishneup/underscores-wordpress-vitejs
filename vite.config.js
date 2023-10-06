import { defineConfig } from 'vite'

export default defineConfig(({ command, mode, ssrBuild }) => {
    const config = {
        server: {
            port: 3000,
            open: true,
        },
        build: {
            rollupOptions: {
              input: {
                main: 'public/js/entrypoints/hello.js',
              },
            },
            emptyOutDir: true,
            copyPublicDir: false,
            assetsDir: 'dist',
        },
    }

    return config
})
