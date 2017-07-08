const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	devtool: 'cheap-module-eval-source-map',
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
				test: /\.css$|\.scss$/,
				use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: [
		            { 
		            	loader: 'css-loader', 
		            	options: {
		            		importLoaders: 1,
		            		localIdentName: '[local]--[hash:base64:3]',
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
		            },
		            {
		            	loader: 'sass-loader',
		            	options: {
		            		includePaths: [
		            		path.resolve(__dirname, 'app', 'styles')
		            		]
		            	}
		            }
		          ]
		        }),
				include: path.resolve(__dirname, 'app'),
				exclude: path.resolve(__dirname, 'node_modules')
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
	resolve: {
		alias: {
			containers: path.join(__dirname, 'app/containers'),
			components: path.join(__dirname, 'app/components'),
			utils: path.join(__dirname, 'app/utils'),
		}
	},
	devServer: {
	  contentBase: path.join(__dirname, 'build'),
	  port: 9000,
	  historyApiFallback: true
	}
}