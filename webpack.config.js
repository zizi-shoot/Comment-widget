const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'main.js',
		publicPath: 'build/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
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
	optimization: {
		minimizer: [new UglifyJsPlugin({
			uglifyOptions: {
				output: {
					comments: false,
				},
			},
		})],
	},
};