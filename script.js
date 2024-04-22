const editBtn = document.getElementById('edit-btn');
const nameSpan = document.getElementById('name');
const ageSpan = document.getElementById('age');
const emailSpan = document.getElementById('email');

editBtn.addEventListener('click', () => {
    const newName = prompt('Ingrese su nuevo nombre:');
    const newAge = prompt('Ingrese su nueva edad:');
    const newEmail = prompt('Ingrese su nuevo correo electrónico:');

    if (newName) {
        nameSpan.textContent = newName;
    }
    if (newAge) {
        ageSpan.textContent = newAge;
    }
    if (newEmail) {
        emailSpan.textContent = newEmail;
    }
});
