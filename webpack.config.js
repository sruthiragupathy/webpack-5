const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackconfig = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				type: 'asset',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'vanillaJS app',
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				node_vendors: {
					name: 'vendor',
					test: /[\\/]node_modules[\\/]/, //anything that is imported from node modules will go into vendor.bundle.js
					chunks: 'all',
					priority: 1,
				},
			},
		},
	},

	mode: 'production',
};

module.exports = webpackconfig;
