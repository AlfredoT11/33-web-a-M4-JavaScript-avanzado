# JavaScript asíncrono

1. La asincronicidad nos permite ejecutar distintos procesos "al mismo tiempo".
    - Paralelismo: Es cuando varios procesos se ejecutan en diferentes hilos porque existen diferentes núcleos.
    - Concurrencia:  Es cuando varios procesos se ejecutan en un solo hilo y tienen que compartir ese tiempo dentro del hilo.
2. Para trabajar con asincronicidad en JS podemos utilizar lo siguiente:
    - Callbacks
    - Promesas
        - Para manejar promesas podemos utilizar los métodos then() y anidar más promesas con then() también.
        - El método catch() recibe una función como parámetro y esta se ejecuta en caso de que alguna de las promesas sea rechazada.
        - Algunos métodos y funciones de JS ya son promesas, algunos ejemplos son:
            - fetch()
            - json()
            - setTimeout()
            - Métodos relacionados a bases de datos
    - Async/Await