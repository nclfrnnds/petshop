const http = require('http');
const url = require('url');
const petshop = require('./petshop');

let server = http.createServer((request, response)=> {

    //adicionar?nome=NOMEDOPET
    let urlCompleta = url.parse(request.url, true);
    console.log(urlCompleta);

    switch (urlCompleta.pathname) {
        case "/":
            response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
            response.end("Você está na página inicial!");
            break;
        case "/home":
            response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
            response.end("Você está no sistema Petshop!");
            break;
        case "/pet/adicionar":
            if (petshop.adicionarPet(urlCompleta.query.nome)) {
                response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
                response.end("Pet cadastrado com sucesso!");
            } else {
                response.writeHead(401, { 'Content-type': 'text/html; charset=utf-8' });
                response.end("Erro ao cadastrar pet!");
            }
            break;
        default:
            response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
            response.write("Você está no servidor!");
            response.end();
    }    
})

server.listen(3000, 'localhost');

// funcao listar pets cadastrados no sistema
// funcao buscar pets