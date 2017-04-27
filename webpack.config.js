const path = require('path')
module.exports = {
	entry: path.join(__dirname, 'demo', 'app.js'),
	output: {
		path: path.join(__dirname, 'demo'),
		filename: 'bundle.js',
		publicPath: 'demo'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
}