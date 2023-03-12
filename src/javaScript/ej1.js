//Crea un programa que pida el nombre de usuario y la edad y si es mayor de 18 indica que puede conducir.

//El método querySelector() devuelve el primero Elemento dentro del documento que coincide con el selector o grupo de selectores especificado. Si no se encuentran coincidencias, null se devuelve.
const btn = document.querySelector("button");
let age = document.getElementById("container-driver-license__userage")
let username = document.getElementById('container-driver-license__username')
let form = document.getElementById('container-driver-license')


// el método addEventListener() agrega un evento de clic al documento:
btn.addEventListener("click", () => {
    let ageResult = age.value
    let usernameResult = username.value

    let canDrive = ageResult;
    if (ageResult >=18) {
        alert(`¡Muy bien ${usernameResult} , tienes edad para conducir!`)
    } else {
        alert(`Lo siento ${usernameResult} , NO tienes edad para conducir.`)
}})