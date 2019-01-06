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
			},
			{	
				//test: 	 	/\.css$/,   // .sass e .scss e css
			    test: 	/\.s(a|c)ss$/,   // .sass e .scss e css
			    include: 	[path.resolve(__dirname, 'src/styles')],  
			    loader: 	[
			        "style-loader", // creates style nodes from JS strings
			        "css-loader", // translates CSS into CommonJS
			      	"sass-loader" // compiles Sass to CSS, using Node Sass by default
			    ]
			}
		]
	},
	resolve: {
    	extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.css', '.scss']
  	}
}
