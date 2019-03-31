let path = require('path');
let webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname + '/public/'),
		publicPath: '/public/',
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				// options: {
				// 	attrs: {
				//       nonce: 'devOnly',
				//     }
				// }
			},
			{
			  	test: /\.pug$/,
			  	loader: 'pug-plain-loader'
			},
			{
				test: /\.styl(us)?$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'stylus-loader'
					}
				]
			}
	    ]
	},
	plugins: [
	    new VueLoaderPlugin(),
	    new MiniCssExtractPlugin({
	      filename: 'style.css'
	    })
	]
}