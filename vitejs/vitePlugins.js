import VitePluginBrowserSync from 'vite-plugin-browser-sync'

const vitePlugins = [
	VitePluginBrowserSync({
		mode: 'proxy',
		bs: {
			codeSync: true,
			files: [
				'./public/**/*.scss',
				'./public/**/*.js',
				'./public/**/*.html',
				'./**/*.php',
			],
			injectChanges: false,
		},
	}),
];

export default vitePlugins;
