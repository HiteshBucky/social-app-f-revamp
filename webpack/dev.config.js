const { merge } = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		open: true,
		host: 'localhost',
	},
	performance: {
		hints: false,
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: { sourceMap: true } },
					{ loader: 'postcss-loader', options: { sourceMap: true } },
					// { loader: 'sass-loader', options: { sourceMap: true } }, //If we are using sass, npm i -D sass-loader sass
				],
			},
		],
	},
});
