/* function saludar(nombre) {
    alert(`Hola ${nombre}`)
}

function despedir(nombre) {
    alert(`Adios ${nombre}`)
}

function procesarEntradaUsuario(callback){
    let nombre = prompt(`Por favor dame tu nombre`);
    callback(nombre);
}

let entradaUsuario = procesarEntradaUsuario(saludar);

console.log(entradaUsuario); */

/* const soyCien = () => {return 100};

const soyDoscientos = () => 200;

const soyTrescienos = () => 300;

const sumaDosFunciones = (callback1, callback2) => {
    const suma = callback1 + callback2;
    return suma;
}

console.log(sumaDosFunciones(soyCien(), soyTrescienos())); */

/* setTimeout(() => console.log("Han pasado 5 segundos"), 5000);

navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.error(err)
) */

setTimeout(() => {
    console.log("Han pasado 5 segundos")
    setTimeout(() =>{
        console.log("Han pasado otros 5 segundos");
        setTimeout(() =>{
            console.log("Han pasado otros 5 segundos");
            setTimeout(() =>{
                console.log("Han pasado otros 5 segundos");
            }, 5000)
        }, 5000)
    }, 5000)
}, 5000)