const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8080
const config = {
    host: 'db',
    database: 'nodedb',
    user: 'root',
    password: 'root'
};

const connection = mysql.createConnection(config)

connection.query(`CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id));`)
const sql1 = `INSERT INTO people(name) values('Marcos');`;
const sql2 = `INSERT INTO people(name) values('Douglas');`;
const sql3 = `INSERT INTO people(name) values('Maria');`;
const sql4 = `INSERT INTO people(name) values('Julia');`;
const sql5 = `INSERT INTO people(name) values('Vanessa');`;
const sql6 = `INSERT INTO people(name) values('Wesley');`;
connection.query(sql1)
connection.query(sql2)
connection.query(sql3)
connection.query(sql4)
connection.query(sql5)
connection.query(sql6)

connection.query('SELECT name FROM people;', function(err, result) {
    const html = ['<h1>FullCycle Rocks!']
    html.push('<ul>')
    for (let i = 0; i < result.length; i++) {
        const element = result[i]
        html.push(`<li>${element.name}</li>`)
    }
    html.push('</ul>')
    const finalHtml = html.join('')

    app.get('/', (req, res) => {
        res.send(finalHtml)
    })
    
})

connection.end()

app.listen(PORT, () => console.log('Conectado, servidor rodando...'))