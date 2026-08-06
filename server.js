const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

// Permite acessar os arquivos HTML, CSS e JS
app.use(express.static(__dirname));

// Conecta ao banco SQLite
const db = new sqlite3.Database("SQLite.db", (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco:", err.message);
    } else {
        console.log("Banco conectado com sucesso!");
    }
});

// Uma única rota para todas as categorias
app.get("/api/:categoria", (req, res) => {

    const categoria = req.params.categoria;

    // Tabelas permitidas
    const tabelas = [
        "pintura",
        "musica",
        "cinema",
        "danca",
        "escultura",
        "literatura",
        "arquitetura",
        "moda",
        "teatro"
    ];

    if (!tabelas.includes(categoria)) {
        return res.status(404).json({
            erro: "Categoria não encontrada."
        });
    }

    const sql = `SELECT * FROM ${categoria}`;

    db.all(sql, [], (err, rows) => {

        if (err) {
            return res.status(500).json({
                erro: err.message
            });
        }

        res.json(rows);

    });

});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});