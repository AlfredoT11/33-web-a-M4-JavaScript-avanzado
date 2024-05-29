const btnShowUsers = document.querySelector("#show-users-button");
const formCreate = document.querySelector("#form-create");

const getUsers = async () => {
    const response = await fetch("https://crudcrud.com/api/d00eecceb4c04121888888ff9f1dfd60/users");
    const data = await response.json();
    console.log(data);
}

const postUser = async (e) => {
    e.preventDefault();
    const username = document.querySelector("#username-input").value;
    const password = document.querySelector("#password-input").value;
    try{
        const response = await fetch("https://crudcrud.com/api/d00eecceb4c04121888888ff9f1dfd60/users", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });
    const data = await response.json();
    console.log(data);
    } catch(err) {
        console.error(err);
    };
}

btnShowUsers.addEventListener("click", () => getUsers());
formCreate.addEventListener("submit", (e) => postUser(e));