const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// mode: "development",
	entry: "./src/app.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "./dist",
	},
	// devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "TS Drag&Drop",
			template: "./index.html",
		}),
	],
	resolve: {
		extensions: [".ts", ".js"],
	},
	devServer: {
		static: "./dist",
	},
};
