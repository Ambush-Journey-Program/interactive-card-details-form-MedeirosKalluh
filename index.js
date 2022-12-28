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

// get the form element
// add a submit event
// use the function block to add the success message

const submitScreen = document.querySelector(".form__submit")
const formChart = document.getElementById("form-chart")
const submit = document.getElementById("form__button")
    submit.addEventListener("click", function(event){
    form.classList.add("form--touched")
    submitScreen.style.display = "flex";
    formChart.style.display = "none";
})