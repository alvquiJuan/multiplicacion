const argv = require('./config/yargs_cfg').argv
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./logica/multiplicar')

comando = argv._[0];
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => { console.log(`archivo: ${archivo.green} creado`) });
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log(`el comando ${comando} no fue reconocido, por favor use -h para ayuda`);
        break;
}
/*base = 4;

 */