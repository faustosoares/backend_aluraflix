class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarFilmes();
    }

    criarFilmes() {
        const sql = 'CREATE TABLE IF NOT EXISTS Filmes(id int NOT NULL AUTO_INCREMENT,'
                     + 'titulo varchar(50) NOT NULL, descricao varchar(100) NOT NULL, url varchar(30) NOT NULL,'
                     + 'PRIMARY KEY(id))';

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            } else {
                console.log('Tabela Filmes criada com sucesso');
            }
        });
    }
}

module.exports = new Tabelas;