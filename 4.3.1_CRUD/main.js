const btnShowUsers = document.querySelector("#show-users-button");
const formCreate = document.querySelector("#form-create");
const formUpdate = document.querySelector("#form-update");
const formDelete = document.querySelector("#form-delete");
const usersContainer = document.querySelector("#users-container");

const getUsers = async () => {
    const response = await fetch("https://crudcrud.com/api/d00eecceb4c04121888888ff9f1dfd60/users");
    const data = await response.json();
    console.log(data);
    let users = data;
    users.map((item) => {
        usersContainer.insertAdjacentHTML("beforeend", `
        <div class="border-2 border-blue-500 m-5 p-5 w-64 ">
            <p>id: ${item._id}</p>
            <h1>nombre: ${item.username}</h1>
            <p>Password: ${item.password}</p>
        </div>
    `)
    })
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

const updateUser = (e) => {
    e.preventDefault();
    const id = document.querySelector("#id-input-update").value;
    const username = document.querySelector("#username-input-update").value;
    const password = document.querySelector("#password-input-update").value;
    fetch(`https://crudcrud.com/api/d00eecceb4c04121888888ff9f1dfd60/users/${id}`, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        method: "PUT",
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });
}

const deleteUser = (e) => {
    e.preventDefault();
    const id = document.querySelector("#id-input-delete").value;
    fetch(`https://crudcrud.com/api/d00eecceb4c04121888888ff9f1dfd60/users/${id}`, {
        method: "DELETE",
    });
}

btnShowUsers.addEventListener("click", () => getUsers());
formCreate.addEventListener("submit", (e) => postUser(e));
formUpdate.addEventListener("submit", (e) => updateUser(e));
formDelete.addEventListener("submit", (e) => deleteUser(e));