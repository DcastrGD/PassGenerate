const { exit } = require("process");
const { createHash } = require("crypto")

const letrasNumeros ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.¿?+-!&%#';
const prompt = require("prompt-sync")({sigint:true}); 
// console.log(letrasNumeros)

let longitud = prompt('Escribe el número de carácteres tenga la contraseña: ')

function passwordGenerate(length) {


    if(letrasNumeros < longitud){
        
        console.log("[Error] Estás intentando poner letras en vez de números")

    } else if(longitud > 800000) {

            console.log("Demasiados números!, tiene que ser un número menor a 800 mil/k")
            process.exit();

    } else if(longitud < 800000){
        
        console.log("Esta es tu contraseña:\n")

    };

    let result = ' ';

    const letrasNumerosLength = letrasNumeros.length;

    for ( let i = 0; i < length; i++ ) {

        result += letrasNumeros.charAt(Math.floor(Math.random() * letrasNumerosLength));
    }

   return result;
}
console.log("===================================================================================================================================================================")
console.log(passwordGenerate(`${longitud}`));
console.log("===================================================================================================================================================================")


