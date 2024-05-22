let promesaTiempoCongelado = new Promise((resolve, reject) => {
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

// Puede recibir 2 parámetros. El primero es una función que se va a ejecutar en caso de que la promesa se cumpla y el segundo parámetro puede una función que se ejecute en caso de que la promesa falle.
promesaTiempoCongelado.then((galleta) => {
    console.log('El contador termino de ejecutarse');
    console.log(galleta);
}, (valorDeRechazo) => {
    console.log('La promesa falló');
    console.log(valorDeRechazo);
});

console.log('Estoy debajo del then');

