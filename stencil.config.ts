import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
	namespace: 'zoo-web-components',
	minifyJs: true,
	plugins: [
		sass({
			injectGlobalPaths: [
				'src/globals/variables.scss'
			]
		})
	],
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader'
		},
		{
			type: 'docs-readme'
		},
		{
			type: 'www'
		}
	],
	// testing: {
	// 	browserHeadless: false,
	// 	browserDevtools: true
	// }
};
