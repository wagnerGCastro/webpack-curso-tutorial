const webpack = require('webpack');
const path = require('path');

const resolvePath = (pathToResolve = '') => path.resolve(__dirname, pathToResolve)

module.exports = {
	entry: 		resolvePath('src/ts/app/app.ts'),
	output: 	{
		path: 		resolvePath('build'),
		filename: 	"bundle.js"
	},
	devtool: 		'source-map',
	module: 	{
		loaders: [
			{
				test: 		/\.tsx?$/,				
				include: 	[resolvePath('src/ts')],
				loader: 	'ts-loader'
			},
			{	
				//test: 	 	/\.css$/,   // .sass e .scss e css
			    test: 		/\.s(a|c)ss$/,   // .sass e .scss e css
			    include: 	[resolvePath('src/styles')],
			    loader: 	[
			        "style-loader", // creates style nodes from JS strings
			        "css-loader", // translates CSS into CommonJS
			      	"sass-loader" // compiles Sass to CSS, using Node Sass by default
			    ]
			}
		]
	},
	resolve: {
    	extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.css', '.scss'],
    	alias: 		{
    		styles: resolvePath('src/styles'),
            helpers: resolvePath('src/ts/helpers')
    		
    	}
  	},
  	plugins: [
  		new webpack.optimize.UglifyJsPlugin(
	  		{
	            compress: { warnings: false }
	        }
        )
  	]
}
