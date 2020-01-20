const opt = {
    base: {
        demand: true,
        alias: 'b'       
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar consola', opt)
    .command('crear', 'Crea la tabla de multiplicar consola', opt)
    .help()
    .argv;

module.exports = {
    argv
}