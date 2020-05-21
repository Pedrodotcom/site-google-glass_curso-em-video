const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(routes)

const nunjucks = require('nunjucks')
nunjucks.configure('pages', {
    express: app,
    noCache: true,
})

// Porta do servidor

    app.listen(8000, function() {
        console.log('The server is running in port 8000')
    })
