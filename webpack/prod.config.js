const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./common');

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'postcss-loader',
					// 'sass-loader', //If we are using sass, npm i -D sass-loader sass
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
});
