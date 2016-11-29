var webpack = require('webpack');

module.exports = {
	entry: './src/test.js',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				'keep_fnames': true
			}
		})
	],
	output: {
		path: './dist/',
		filename: 'test.js'
	}
};
