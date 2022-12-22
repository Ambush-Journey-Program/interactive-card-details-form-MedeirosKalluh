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






