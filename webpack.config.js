const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

module.exports = {
	context: __dirname + '/app',
	entry: {
		'main.bundle': './main.js', 
		'sw': './sw.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: '[name].js'
	},
	devtool: 'cheap-module-source-map',
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
							modules: true,
							minimize: process.env.NODE_ENV === 'production'
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
			},
			{
				test: /\.(png|jpeg|jpg|gif|svg)$/,
				use: [
				'url-loader?limit=100000'
				]
			}
		]
	},
	plugins: [
	new ExtractTextPlugin('style.css'),
	new HtmlWebpackPlugin({
		template: './index.html',
		inject: true,
		favicon: '../favicon.ico',
		excludeAssets: [/sw.js/]
	}),
	new HtmlWebpackExcludeAssetsPlugin(),
	new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
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
		historyApiFallback: true,
		proxy: {
			'/api': {
				target: 'http://api.openweathermap.org/data/2.5/',
				pathRewrite: {
					'^/api' : '/',
				}
			}
		},
		disableHostCheck: true
		 /* https: {
			key: fs.readFileSync(path.join(__dirname, 'cert/server.pem')),
			cert: fs.readFileSync(path.join(__dirname, 'cert/server.pem')),
			//ca: fs.readFileSync(path.join(__dirname, 'cert/server.pem')),
		} */ 
	}
}