const fs = require('fs');
const colors = require('colors');

let listarTabla = (theBase, theLimite) => {
    console.log('= = = = = ='.green);
    console.log(`Tabla del ${theBase}`.green);
    console.log('= = = = = ='.green);
    let dato = ''
    for (let index = 1; index <= theLimite; index++) {
        let resultado = theBase * index;

        console.log(`${theBase} * ${index} = ${resultado}`);
    }
}

let crearArchivo = (theBase, theLimite) => {
    return new Promise((resolve, reject) => {
        let dato = ''
        for (let index = 1; index <= theLimite; index++) {
            let resultado = theBase * index;

            dato += `${theBase} * ${index} = ${resultado}\n`
        }

        fs.writeFile(`tablas/tabla-${theBase}.txt`, dato, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${theBase}.txt`);
        });
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}