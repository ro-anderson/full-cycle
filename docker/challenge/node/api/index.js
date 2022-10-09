const express = require('express')
const mysql = require('mysql')
const random_name = require('node-random-name');

const app = express()
const port = 3000

const criaTablePeople = `
    create table if not exists people (
        id int not null auto_increment,
        name varchar(1000),
        primary key(id)
    )
`
const selectPeople = `
    select * from people
    order by id desc
    limit 30
`

function insertPeople(name) {
    return `insert into people(name) values ('${name}')`
}

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'node-api'
}

const conn = mysql.createConnection(config)
conn.query(criaTablePeople)
conn.end()

app.get('/', (req,res) => {

    let retorno = '';

    const conn = mysql.createConnection(config)
    conn.query(insertPeople(random_name()))

    conn.query(selectPeople, function (err, result, fields) {
        if (err) throw err;
        if (result) {
            result.forEach(p => {
                retorno += 
                    `<tr>
                        <td>${p.id}</td>
                        <td>${p.name}</td>
                    </tr>`
            });
        }

        res.send(
            `<h1>Full Cycle Rocks!</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
                ${retorno}
            </table>`
        );
        
    })
    conn.end()
    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port);
})

//create table people (id int not null auto_increment, name varchar(255), prumary key(id))