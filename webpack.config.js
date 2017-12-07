const webpack = require ("webpack")
const path = require ("path")
const HtmlWebpackPlugin = require ("html-webpack-plugin")

const SOURCE_PATH = path.resolve ( __dirname, "src" )
const PUBLIC_PATH = path.resolve ( __dirname, "public_html" )

module.exports = {
	entry: [
		path.join ( SOURCE_PATH, "/index.jsx" ),
		path.join ( SOURCE_PATH, "stylesheets/index.scss" ),
	],
	output: {
		path: PUBLIC_PATH,
		filename: "bundle.js"
	},
	resolve: {
		extensions: [ ".jsx", ".js", "scss", "css" ],
		modules: [ "node_modules", SOURCE_PATH ]
	},
	module: {
		loaders: [
			{
				test: /.*$/,
				loader: "file-loader",
				include: path.join ( SOURCE_PATH, "assets" ),
				options: {
					useRelativePath: true,
					name: "[name].[ext]",
					context: SOURCE_PATH
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: "url-loader"
			},
			{
				test: /\.jsx?$/,
				include: SOURCE_PATH,
				loader: "babel-loader"
			},
			{
				test: /\.(s?css|jsx?)$/,
				include: SOURCE_PATH,
				enforce: "pre",
				loader: "import-glob"
			},
			{
				test: /\.s?css$/,
				include: SOURCE_PATH,
				enforce: "post",
				loader: [ "style-loader", "css-loader", "sass-loader" ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin ({
			title: "Custom template",
			template: path.join ( SOURCE_PATH, "index.html" ),
			hash: true,
			minify: {
				"collapseBooleanAttributes": true,
				"collapseInlineTagWhitespace": true,
				"collapseWhitespace": true,
				"removeTagWhitespace": true,
				"html5": true
			}
		})
	]
}
