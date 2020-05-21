const express = require('express')
const routes = express.Router()
const db = require('./db')

routes.use(express.urlencoded({ extended: true }))

// Rotas da aplicação - Usuário

routes.get('/', function(req, res) {
    return res.render('index.html')
})

routes.get('/specs', function(req, res) {
    return res.render('specs.html')
})

routes.get('/google-glass', function(req, res) {
    return res.render('google-glass.html')
})

routes.get('/fotos', function(req, res) {
    return res.render('fotos.html')
})

routes.get('/multimidia', function(req, res) {
    return res.render('multimidia.html')
})

routes.get('/fale-conosco', function(req, res) {
    return res.render('fale-conosco.html')
})

routes.post('/fale-conosco', function(req, res) {

    const query = `
        INSERT INTO messages(
            name,
            email,          
            nSex,
            birth,
            adress,
            adressNum,
            adressComplement,
            state,
            city,
            mUrg,
            title,
            msg,
            quest,
            color,
            amount,
            sent_at,
            answered_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, null);
    `
    const msg = [
        req.body.name,
        req.body.email,
        req.body.nSex,
        req.body.birth,
        req.body.adress,
        req.body.adressNum,
        req.body.adressComplement,
        req.body.state,
        req.body.city,
        req.body.mUrg,
        req.body.title,
        req.body.msg,
        req.body.quest,
        req.body.color,
        req.body.amount
    ]

    db.run(query, msg, function(err) {
        if(err){
            return res.status(400).send('Database error! Please, try again.')
        }
        console.log(req.body)
        return res.redirect('../')
    })

})

// Rotas da aplicação - Administrador

routes.get('/login-admin', function(req, res) {
    return res.render('admin-login.html')
})

routes.get('/readmessages', function(req, res) {
    db.all(`SELECT * FROM messages`, function(err, rows) {

        const recentOrdering = rows.reverse()

        if(err) {
            console.log(err)
            return res.status(400).send('Database error. Please,try again.')
        }

        return res.render('admin-messages.html', { messages: recentOrdering })
    })

})

routes.get('/readmessages/details/:id', function(req, res) {
    db.all(`SELECT * FROM messages WHERE id=${req.params.id}`, function(err, rows) {
        if(err) {
            console.log(err)
            return res.status(400).send('Database error. Please,try again.')
        }

        return res.render('admin-messages-detail.html', { messages: rows })
    })
})

routes.post('/readmessages/details/:id', function(req, res) {
    db.run(`
        UPDATE messages 
            SET 
                admin_response = "${req.body.admin_response}",
                answered_at = CURRENT_TIMESTAMP
            WHERE id=${req.params.id}
        `, function(err) {
            if(err) {
                console.log(err, req.body)
                return res.status(400).send('Database error. Please,try again.')
            }
            console.log(req.body)
            return res.redirect('/readmessages')
    })
})

routes.get("/readmessages/details/:id/delete", function(req, res) {
    db.all(`DELETE FROM messages WHERE id=${req.params.id}`, function(err) {
        if(err){
            console.log(err)
            return res.status(400).send('Database error! Please, try again.')
        }
        console.log('Message deleted')
        return res.redirect('/readmessages')
    })
})

module.exports = routes