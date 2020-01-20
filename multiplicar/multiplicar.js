const fs = require('fs');
let contenido = '';

let listarTabla = (base, limite = 10) => {
    for(let i = 1; i<=limite; i++){
        console.log(`${base} x ${i} = ${i*base}`);
    } 
}

let crearArchivo = (base, limite = 10) =>{
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El dato ${base} no es un numero`);
            return;
        }
        for(let i = 1; i<=limite; i++){
            contenido += (`${base} x ${i} = ${i*base}\n`);
        }          
        fs.writeFile(`tbla-${base}.txt`, contenido, (err) => {
            if (err) reject(err)
            else resolve(`tbla-${base}`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
