const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

const nunjucks = require('nunjucks')
nunjucks.configure('pages', {
    express: app,
})

// Rotas da aplicação

app.get('/', function(req, res) {
    res.render('index.html')
})

app.get('/specs', function(req, res) {
    res.render('specs.html')
})

app.get('/google-glass', function(req, res) {
    res.render('google-glass.html')
})

app.get('/fotos', function(req, res) {
    res.render('fotos.html')
})

app.get('/multimidia', function(req, res) {
    res.render('multimidia.html')
})

app.get('/fale-conosco', function(req, res) {
    res.render('fale-conosco.html')
})

app.post('/fale-conosco/submit', function(req, res) {
  
        if(err) {
            return res.status(400).send('Server error. Please, try again.')
        }

        res.send("Mensagem registrada com sucesso!")
        res.redirect('/')
})


app.listen(8000, function() {
    console.log('The server is running in port 8000')
})

