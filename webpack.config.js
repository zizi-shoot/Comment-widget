const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'main.js',
		publicPath: 'build/',
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.png$/i,
				use: 'url-loader',
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'style.css' }),
	],
};