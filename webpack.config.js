module.exports = {
entry: "./src/index.jsx",
output: {
filename: "./src/out.js"
  },
 devtool: 'inline-source-map',
 watch: true,
 devServer:{
	inline:	true,
	contentBase: './',
	port:3001
	},

 module: {
   loaders: [
         {
           test: /\.jsx$/,
           exclude: /(node_modules)/,
           loader: 'babel-loader',
           query: {
             presets: ['es2015', 'stage-2', 'react']
           }
         },
           {
               test: /\.scss$/,
               loader: ['style-loader', 'css-loader', 'sass-loader']
           }
       ]
   }
}
