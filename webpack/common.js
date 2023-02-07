const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
};
