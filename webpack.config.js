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
				test: 		/\.tsx?$/,				
				include: 	[path.resolve(__dirname, 'src/ts')], 
				loader: 	'ts-loader'
			}
		]
	},
	resolve: {
    	extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.css', '.scss']
  	}
}
