var config = {
    entry: './main.js',
    output: {
        path:'/',
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: process.env.PORT| 3000
    }
}

module.exports = config;