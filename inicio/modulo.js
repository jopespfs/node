// a função require importa modulos (são funções ou atributos) que podem ser ultilizadas no codigo
// require instancia um modulo para dentro de uma variavel
var os = require('os'); //https://nodejs.org/api/os.html
var fs = require('fs');
var path = require('path')

console.log('----- Modulo: OS-----\n');

console.log('SO:' + os.platform());
console.log('Arquitetura: ' + os.arch()); 
console.log('Hostname: ' + os.hostname());

console.log('----- Modulo: OS-----\n');



console.log('----- Modulo: FS-----\n');

/* fs.rename('teste.js', 'teste_novo.js', (err) => {
    if(err) {
        console.log(err);
    }
}) */

/* fs.readFile('teste_novo.js', (err, data) => {
    console.log('1');
    if(err) throw err
    console.log(`Conteúdo do arquivo: ${data}`);
}) */

//metodo sincrono, ou seja, espera terminar para depois 
const data = fs.readFileSync('teste_novo.js').toString()
console.log(data);

console.log('----- Modulo: FS-----\n');

console.log('----- Modulo: PATH -----\n');




