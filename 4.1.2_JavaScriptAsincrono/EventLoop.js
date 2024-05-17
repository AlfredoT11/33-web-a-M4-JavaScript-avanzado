console.log(1);

navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
)

Promise.resolve().then(() => console.log(3))

console.log(4);