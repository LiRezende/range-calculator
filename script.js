const btnCompany = document.querySelector('.btnCompany');

const btnPerson = document.querySelector('.btnPerson');

const containerCompany = document.querySelector('.container-company');

const containerPerson = document.querySelector('.container-person');

const sliderPerson = document.querySelector('.slider-calculator-person');

const outputPerson = document.querySelector('.current-value-person');

const resultPerson = document.querySelector('.person-savings');

const sliderCompany = document.querySelector('.slider-calculator-company');

const outputCompany = document.querySelector('.current-value-company');

const resultCompany = document.querySelector('.company-savings');

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

// Slider Person
sliderPerson.oninput = function() {
    let value = this.value;
    outputPerson.innerHTML = value;
    resultPerson.innerHTML = ((value * 0.10) * 12).toLocaleString('pt-BR');
}

sliderPerson.addEventListener("input", function() {
    let x = ((sliderPerson.value - sliderPerson.min) / (sliderPerson.max - sliderPerson.min) * 100 )
    let color = `linear-gradient(90deg, rgb(65, 154, 60) ${x}%, rgb(214,214,214) ${x}%)`;
    sliderPerson.style.background = color;
})

// Slider Company
sliderCompany.oninput = function() {
    let value = this.value;
    outputCompany.innerHTML = value;
    resultCompany.innerHTML = ((value * 0.30) * 12).toLocaleString('pt-BR');
}

sliderCompany.addEventListener("input", function() {
    let x = ((sliderCompany.value - sliderCompany.min) / (sliderCompany.max - sliderCompany.min) * 100 )
    let color = `linear-gradient(90deg, rgb(65, 154, 60) ${x}%, rgb(214,214,214) ${x}%)`;
    sliderCompany.style.background = color;
})
