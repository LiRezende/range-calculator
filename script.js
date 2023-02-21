const btnCompany = document.querySelector('.btnCompany');

const btnPerson = document.querySelector('.btnPerson');

const containerCompany = document.querySelector('.container-company');

const containerPerson = document.querySelector('.container-person');

// Show company container
btnCompany.addEventListener('click', () => {
    containerCompany.style.display = 'block';
    containerPerson.style.display = 'none';
});

// Hide company container
btnPerson.addEventListener('click', () => {
    containerCompany.style.display = 'none';
    containerPerson.style.display = 'block';
});
