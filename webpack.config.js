const path = require('path');

module.exports = {
	entry: 		path.resolve(__dirname, "src/js/app.js"),
	output: 	{
		path: 		path.resolve(__dirname, "build"),
		filename: 	"bundle.js"
	},
	devtool: 		'source-map',
	module: 	{
		loaders: [
			{
				test: 		/\.ts/,
				include: 	['node_modules'],  // com execessão node_modules 
				loader: 	'ts-loader'
			}
		]
	}
}
