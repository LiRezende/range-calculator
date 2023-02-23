const btnCompany = document.querySelector('.btnCompany');

const btnPerson = document.querySelector('.btnPerson');

const containerCompany = document.querySelector('.container-company');

const containerPerson = document.querySelector('.container-person');

const slider = document.querySelector('#range-calculator');

const output = document.querySelector('.current-value-person');

const result = document.querySelector('.person-savings');

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

// Slider
slider.oninput = function() {
    output.innerHTML = this.value;
}

slider.addEventListener("input", function() {
    let x = ((slider.value - slider.min) / (slider.max - slider.min) * 100 )
    let color = `linear-gradient(90deg, rgb(117,252,117) ${x}%, rgb(214,214,214) ${x}%)`;
    slider.style.background = color;
})
