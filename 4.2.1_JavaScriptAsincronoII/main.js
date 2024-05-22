let promesaTiempoCongelado1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Contador terminado');
        let edad = 19;
        if(edad > 18){
            resolve('Es mayor de edad, sí puede manejar'); // <- Esto hace que la promesa se cumpla.
        }else{
            reject('No es mayor de edad, no puede manejar. :('); // <- Esto hace que la promesa sea rechazada.
        }
    }, 2000)
});

/*
let promesaTiempoCongelado2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Contador terminado');
        let edad = 19;
        if(edad > 18){
            resolve('Es mayor de edad, sí puede manejar'); // <- Esto hace que la promesa se cumpla.
        }else{
            reject('No es mayor de edad, no puede manejar. :('); // <- Esto hace que la promesa sea rechazada.
        }
    }, 2000)
});

let promesaTiempoCongelado3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Contador terminado');
        let edad = 19;
        if(edad > 18){
            resolve('Es mayor de edad, sí puede manejar'); // <- Esto hace que la promesa se cumpla.
        }else{
            reject('No es mayor de edad, no puede manejar. :('); // <- Esto hace que la promesa sea rechazada.
        }
    }, 2000)
});
*/



// Puede recibir 2 parámetros. El primero es una función que se va a ejecutar en caso de que la promesa se cumpla y el segundo parámetro puede una función que se ejecute en caso de que la promesa falle.
/*
promesaTiempoCongelado.then((galleta) => {
    console.log('El primer contador terminó de ejecutarse');
    console.log(galleta);
    let promesaTiempoCongelado2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Contador terminado');
            let edad = 19;
            if(edad > 18){
                resolve('Es mayor de edad, sí puede manejar'); // <- Esto hace que la promesa se cumpla.
            }else{
                reject('No es mayor de edad, no puede manejar. :('); // <- Esto hace que la promesa sea rechazada.
            }
        }, 2000)
    });
    promesaTiempoCongelado2.then((valorDeAceptacion) => {
        console.log('Contador 2 terminado');
        console.log(valorDeAceptacion)
        let promesaTiempoCongelado3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Contador terminado');
                let edad = 19;
                if(edad > 18){
                    resolve('Es mayor de edad, sí puede manejar'); // <- Esto hace que la promesa se cumpla.
                }else{
                    reject('No es mayor de edad, no puede manejar. :('); // <- Esto hace que la promesa sea rechazada.
                }
            }, 2000)
        });
        promesaTiempoCongelado3.then((valorDeAceptacion) => {
            console.log('Contador 2 terminado');
            console.log(valorDeAceptacion)
        });
    });
}, (valorDeRechazo) => {
    console.log('La promesa falló');
    console.log(valorDeRechazo);
});
*/

promesaTiempoCongelado1.then((valorDeAcepation) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Contador 2 terminado');
            //resolve('Todo ok en la promesa 2');
            reject('Fallo en la promesa 2');
        }, 2000)
    });
}).then((valorDeAceptacionPromesa2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Contador 3 terminado');
            resolve('Todo ok en la promesa 3');
        }, 2000)
    });
}).then((valorDeAceptacionPromesa3) => {
    console.log('Todas las promesas terminaron. :D');
}).catch((valorDeRechazo) => {
    console.log('Alguna de las promesas falló. ):');
    console.log(valorDeRechazo);
});

console.log('Estoy debajo del then');

