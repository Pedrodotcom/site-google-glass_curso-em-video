const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./site-google-glass.db")

db.serialize(function() {
    db.run(`
        CREATE TABLE IF NOT EXISTS messages(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,          
            nSex BLOB,
            birth TEXT,
            adress TEXT,
            adressNum INTEGER,
            adressComplement TEXT,
            state BLOB,
            city TEXT,
            mUrg BLOB,
            title TEXT,
            msg TEXT,
            quest BLOB,
            color BLOB,
            amount INTEGER
        );
    `)
})

module.exports = db

