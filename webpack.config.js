const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
				'babel-loader',
				],
				include: path.resolve(__dirname, 'app')
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: [
		            { 
		            	loader: 'css-loader', 
		            	options: {
		            		importLoaders: 1,
		            		modules: true 
		            	} 
		            },
		            {
		            	loader: 'postcss-loader',
		            	options: {
		            		plugins: [
	            			require('autoprefixer')(),
	            			],
	            			parser: 'postcss-scss'
		            	}
		            }
		          ]
		        }),
				include: path.resolve(__dirname, 'app')
			},
			{
				test: /\.html$/,
				use: [
				'html-loader'
				],
				include: path.resolve(__dirname, 'app')
			}
		]
	},
	plugins: [
	new ExtractTextPlugin('style.css'),
	new HtmlWebpackPlugin({
		template: 'app/index.html',
		inject: true
	})
	],
	devServer: {
	  contentBase: path.join(__dirname, 'build'),
	  port: 9000
	}
}