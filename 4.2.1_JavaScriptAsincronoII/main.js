/*
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
*/

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

/*
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
*/

/*
console.log('Estoy debajo del then');

// fetch() ya es una promesa.
const buscarTags = fetch('https://cataas.com/api/tags');

buscarTags.then((valorRegresado) => {
    console.log(valorRegresado);
    // El método json() ya es una promesa.
    return valorRegresado.json();
}).then((valorJson) => {
    console.log('Valor en JSON');
    console.log(valorJson);

    let indexTag = Math.floor(Math.random() * valorJson.length)
    let valorTag = valorJson[indexTag];
    return fetch(`https://cataas.com/cat/${valorTag}`)
}).then((resultadoPeticion) => {
    console.log('El resultado de la petición es: ');
    console.log(resultadoPeticion);
}).catch((valorDeRechazo) => {
    console.log('Falló alguna de las promesas');
    console.log(valorDeRechazo);
});
*/

let promesaTiempo1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promesa 1');
        reject('Promesa 1 ok');
    }, 5000)
});

let promesaTiempo2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promesa 2');
        reject('Promesa 2 ok');
    }, 1000)
});


let promesaTiempo3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promesa 3');
        reject('Promesa 3 ok');
    }, 3000)
});

// Este método ejecuta el then() en caso de que TODAS las promesas se cumplan.
Promise.all([promesaTiempo1, promesaTiempo2, promesaTiempo3])
.then((valorPromesa) => {
    console.log('(Promise.all()) Las 3 promesas se cumplieron');
    console.log(valorPromesa); // <- Aquí se almacenan los valores del resolve de las promesas a esperar.
}).catch((valorRechazo) => {
    console.log('(Promise.all()) Alguna promesa no se cumplió');
    console.log(valorRechazo); // <- Aquí se almacena el valor del reject de la promesa rechazada.
});

// Este método ejecuta el then() en cuanto una promesa se cumpla. En caso de que una promesa se rechace, se ejecuta el catch().
Promise.race([promesaTiempo1, promesaTiempo2, promesaTiempo3])
.then((valorDePrimeraPromesaResuelta) => {
    console.log('(Promise.race()) Alguna de las promesas ya terminó');
    console.log(`(Promise.race()) Regresó el valor: ${valorDePrimeraPromesaResuelta}`);
}).catch((valorRechazo) => {
    console.log('(Promise.race()) Alguna promesa no se cumplió');
    console.log(valorRechazo); // <- Aquí se almacena el valor del reject de la promesa rechazada.
});

// Este método ejecuta el then() si AL MENOS una de las promesas se cumple, no importa si es la primera o la última. Si todas se rechazan, se ejecuta el catch()
Promise.any([promesaTiempo1, promesaTiempo2, promesaTiempo3])
.then((valorDePrimeraPromesaResuelta) => {
    console.log('(Promise.any()) Alguna de las promesas ya terminó');
    console.log(`(Promise.any()) Regresó el valor: ${valorDePrimeraPromesaResuelta}`);
}).catch((valorRechazo) => {
    console.log('(Promise.any()) Todas las promesas se rechazaron');
    console.log(valorRechazo); // <- Aquí se almacena el valor del reject de la promesa rechazada.
});

// Este método ejecuta el then() una vez que todas las promesas terminan, no importa si se aceptan o se rechazan.
Promise.allSettled([promesaTiempo1, promesaTiempo2, promesaTiempo3])
.then((valorDePrimeraPromesaResuelta) => {
    console.log('(Promise.allSettled()) Todas las promesas terminaron');
    console.log(`(Promise.allSettled()) Regresó el valor: ${valorDePrimeraPromesaResuelta}`);
}).catch((error) => {
    console.log(`(Promise.allSettled()) Ocurrió un error`);
});

// Ejercicio
/* Vamos a cocinar un pastel y para eso debemos seguir los siguientes pasos:
    1. Comprar los ingredientes -> 5 segundos
    2. Preparar los ingredientes -> 2 segundos
    3. Revolver los ingredientes -> 3 segundos
    4. Precalentar el horno -> 4 segundos
    5. Hornear mezcla -> 5 segundos
    6. Servir pastel -> 1 segundos
    Tiempo total = 20 segundos.

    Simular cada paso con setTimeout y console logs y van preparar su pastel.

    Optimizar el proceso. Utilizar procesos asíncronos para ahorrar tiempo en la preparación del pastel.
*/
