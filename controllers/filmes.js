module.exports = app => { 
    app.get('/filmes', (req, res) => res.send('Você está na rota de filmes'));

    app.post('/filmes', (req, res) =>{
        console.log(req.body);
        res.send('Você está na rota de atendimentos e está realizando um POST');
    });
}