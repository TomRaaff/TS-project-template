const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		hot: true,
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: 'src/index.html' }],
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ca]ss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.svg$/,
				use: 'file-loader',
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/png',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [
			'.tsx',
			'.ts',
			'.js',
			'.sass',
			'.css',
		],
	},
};

module.exports = config;
