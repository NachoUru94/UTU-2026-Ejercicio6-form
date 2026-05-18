const usuarios = [
    {
        id: 1,
        nombre: 'Administrador',
        email: '[admin@mail.com](mailto:admin@mail.com)',
        password: '1234',
        rol: 'admin',
        activo: true
    },
    {
        id: 2,
        nombre: 'Juan Perez',
        email: '[juan@mail.com](mailto:juan@mail.com)',
        password: 'abcd',
        rol: 'user',
        activo: true
    }
];


const btnAddUser = document.getElementById("BtnAddUser");
const nombreNuevo = document.getElementById("nombreNuevo");

btnAddUser.addEventListener("click", (e) => {
    e.preventDefault(); // Evita que la página se recargue al dar click

    const AddUser = nombreNuevo.value;  //funcion que obtiene el valor del formulario

    const ValidateUserName = usuarios.find(user => user.nombre === AddUser);// con find se busca si existe ese usuario en el array

    // 3. el if para dejar el mensaje si nos da true o false
    if (ValidateUserName) {
        console.log(`¡El usuario ${AddUser} YA EXISTE!`);
    } else {
        console.log(`El usuario ${AddUser} NO existe. Puedes agregarlo.`);
    }
});





