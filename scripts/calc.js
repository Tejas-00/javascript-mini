let calculation = localStorage.getItem('calculation');
if (!calculation) {
    calculation = '';
}

function updateCalculation(value) {
    calculation += value;
    document.querySelector('.js-result').innerHTML = calculation;
    localStorage.setItem('calculation',calculation);
}