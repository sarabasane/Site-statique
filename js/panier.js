$(".calendar1").datepicker({ 
    minDate: 0 
});

$(".calendar2").datepicker({ 
    minDate: +2, maxDate: "+1M +10D" 
});



const options = document.getElementsByClassName('.form-select')
Array.from(options).forEach(option => {
  option.addEventListener('click', event => {
    if(!option.onClick()) {
      event.preventDefault()
      event.stopPropagation()
    }
    option.classList.add('was-validated')
  }, false)
})
