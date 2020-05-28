const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.listen(3000, () =>
console.log(`Servidor rodando na porta 3000!`),
);

app.use(cors())

app.use(bodyParser.json());

let db = new sqlite3.Database('./db/master-database.db');


db.run(
        `
    CREATE TABLE IF NOT EXISTS veiculos ( 
        id iNTEGER PRIMARY KEY AUTOINCREMENT,
        placa TEXT NOT NULL,
        chassi TEXT NOT NULL,
        renavam BIGINT NOT NULL,
        modelo TEXT NOT NULL,
        marca TEXT NOT NULL,
        ano INT NOT NULL
    );`
);


app.get('/api/veiculos', function(req, res) {
    let sql = `SELECT * FROM veiculos
        ORDER BY id`;

    try{
        db = new sqlite3.Database('./db/master-database.db');

        let arrayVeiculos = []
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                arrayVeiculos.push(row)
            });
            res.send(arrayVeiculos)
        });

        db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
        });
    }
    catch(e){
        res.send([{"status":500}])
    }
    
});

app.get('/api/veiculo/:id', function(req, res) {
    let id = req.params.id;

    let sql = `SELECT * FROM veiculos
                WHERE id = ${id}
        ORDER BY id`;

    try{
        db = new sqlite3.Database('./db/master-database.db');

        let arrayVeiculos = []
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                arrayVeiculos.push(row)
            });
            res.send(arrayVeiculos)
        });

        db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
        });
    }
    catch(e){
        res.send([{"status":500}])
    }
    
});

app.post('/api/veiculo',function(req, res) {
    let objNovoVeiculo = req.body
    
    try{
        db = new sqlite3.Database('./db/master-database.db');

        db.run(`
        INSERT INTO veiculos
        (
            placa,
            chassi,
            renavam,
            modelo,
            marca,
            ano
        )
        VALUES(
            '${objNovoVeiculo.placa}',
            '${objNovoVeiculo.chassi}',
            ${objNovoVeiculo.renavam},
            '${objNovoVeiculo.modelo}',
            '${objNovoVeiculo.marca}',
            ${objNovoVeiculo.ano}
        )`);
        res.send({"status":200})

        db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
        });
    }
    catch(e){
        res.send({"status":500})
    }
})

app.delete('/api/veiculo/:id',function(req,res){
    let id = req.params.id;
    
    try{
        db = new sqlite3.Database('./db/master-database.db');

        db.run(`DELETE FROM veiculos WHERE id = ${id}`);

        db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
        });

        res.send({"status":200});
    }
    catch(e){
        res.send({"status":500});
    }
    

})

app.put('/api/veiculo/:id',function(req,res){
    let idVeiculo = req.params.id;

    let objNovoVeiculo = req.body;

    try{
        db = new sqlite3.Database('./db/master-database.db');

        db.run(`
            UPDATE veiculos 
                SET placa = '${objNovoVeiculo.placa}',
                    chassi = '${objNovoVeiculo.chassi}',
                    renavam = ${objNovoVeiculo.renavam},
                    modelo = '${objNovoVeiculo.modelo}',
                    marca = '${objNovoVeiculo.marca}',
                    ano = ${objNovoVeiculo.ano}
            
            WHERE id = ${idVeiculo}`);

        db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
        });
        
        res.send({"status":200})
    }
    catch(e){
        res.send({"status":500})
    }
})