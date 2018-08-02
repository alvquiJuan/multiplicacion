const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}
const argv = require('yargs')
    .command("listar", "Lista la tabla de multiplicar de un número", opt)
    .command("crear", "crea un archivo con la tabla de multiplicar de un número", opt)
    .help()
    .argv

module.exports = { argv };