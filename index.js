const formNameEl = document.querySelector("#form__name")
const formNumberEl = document.getElementById("form__number")
const formYearEl = document.getElementById("form-yy")
const formMonthEl = document.getElementById("form-mm")
const formCodeEl = document.getElementById("form__code")

formNameEl.addEventListener("input", function setCardName(event){
    document.querySelector('#card-name').textContent = event.target.value;
})

formNumberEl.addEventListener("input", function setCardNumber(event){
    document.querySelector('#card-number').textContent = event.target.value;
})

formYearEl.addEventListener("input", function setYear(event){
    document.querySelector(`#card-YY`).textContent = event.target.value;
})

formMonthEl.addEventListener("input", function setMonth(event){
    document.querySelector('#card-MM').textContent = event.target.value;
})

formCodeEl.addEventListener("input", function setCardCode(event){
    document.querySelector('#card-code').textContent = event.target.value;
})






