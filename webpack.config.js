const path = require('path')
const fs = require('fs')
const examples = fs.readdirSync('./examples')

configs = examples.map(exampleDir => {
    const absPath = path.resolve('./examples', exampleDir)
    console.log(absPath)

    return {
        devtool: '#inline-source-map',
        entry: `${absPath}/index.js`,
        output: {
            path: absPath,
            filename: 'build.js',
            pathinfo: false
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [
                        path.resolve(__dirname, 'examples')
                    ],
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'react',
                            'es2015'
                        ]
                    }
                }
            ]
        }
    }
})

module.exports = configs