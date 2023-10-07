import generateEntrypoints from "./generateEntryPoints";
import progress from "rollup-plugin-progress";
import babel from "rollup-plugin-babel";
import iifeWrapper from "./iifeWrapper";

let pluginOptions = [
    progress(),
    babel({
        exclude: 'node_modules/**',
    }),
    iifeWrapper(),
];

const buildOptions = {
    manifest: true,
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
        plugins: pluginOptions

    },
    emptyOutDir: true,
    copyPublicDir: false,
    minify: true,
    write: true
};

export default buildOptions;
