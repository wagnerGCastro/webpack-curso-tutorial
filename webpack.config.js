const path = require('path');

module.exports = {
	entry: 		path.resolve(__dirname, "src/ts/app.ts"),
	output: 	{
		path: 		path.resolve(__dirname, "build"),
		filename: 	"bundle.js"
	},
	devtool: 		'source-map',
	module: 	{
		loaders: [
			{
				test: /\.tsx?$/,				// all files with a `.ts` or `.tsx` extension will be handled by `ts-loade
				include: 	['node_modules'],   // com execessão node_modules 
				loader: 	'ts-loader'
			}
		]
	}
}
