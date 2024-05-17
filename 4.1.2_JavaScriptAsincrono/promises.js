const resolveAfter = () => {
    return new Promise((resolve, reject) => {
        let valor = true;
        setTimeout(() => {
            return valor ? resolve(["pera", "manzana", "fresa"]) : reject("Rechazado");
        }, 2000);
    });
}

const asyncCall = async () => {
    try {
        console.log("Llamando a la promesa");
        for await (const fruits of resolveAfter()){
            console.log(fruits);
        }
    } catch (error) {
        console.error(error);
    }
}

asyncCall();