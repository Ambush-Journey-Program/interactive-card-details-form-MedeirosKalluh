const formNameEl = document.querySelector("#form__name")
formNameEl.addEventListener("input", function setCardName(event){
    document.querySelector('#card-name').textContent = event.target.value;
})

const formNumberEl = document.getElementById("form__number")
formNumberEl.addEventListener("input", function setCardNumber(event){
    document.querySelector('#card-number').textContent = event.target.value;
})

const formYearEl = document.getElementById("form-yy")
formYearEl.addEventListener("input", function setYear(event){
    document.querySelector(`#card-YY`).textContent = event.target.value;
})

const formMonthEl = document.getElementById("form-mm")
formMonthEl.addEventListener("input", function setMonth(event){
    document.querySelector('#card-MM').textContent = event.target.value;
})

const formCodeEl = document.getElementById("form__code")
formCodeEl.addEventListener("input", function setCardCode(event){
    document.querySelector('#card-code').textContent = event.target.value;
})




const inputEls = document.querySelectorAll('.form__input') 
inputEls.forEach(function(inputEl) {
    inputEl.addEventListener("input", function() {
        inputEl.classList.add("input--touched")
    })
})

const formButton = document.getElementById("form__button")
formButton.addEventListener("click", function(){
    form.classList.add("form--touched") 
})


const submit = document.querySelector("#form")
const confirmationMessage = document.querySelector("#form__submit")
const formChart = document.getElementById("form-chart")
submit.addEventListener("submit", function(event){
    event.preventDefault(); 
    confirmationMessage.style.display = "flex";
    formChart.style.display = "none";
})
    