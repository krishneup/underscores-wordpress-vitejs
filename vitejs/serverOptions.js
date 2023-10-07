const serverOptions = {
    port: 3000,
    watch: {
        usePolling: true,
        ignored: ['!**/node_modules'],
    },
    hmr: {
        host: true,
        protocol: 'wss',
    },
    proxy: {
        '/': {
            target: 'http://vite.local', // change it to your WordPress url
            changeOrigin: true,
            ws: true,
        },
    }

}

export default serverOptions;
