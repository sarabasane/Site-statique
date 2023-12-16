$(".calendar1").datepicker({ 
    minDate: 0 
  });

  $(".calendar2").datepicker({ 
    minDate: +2, maxDate: "+1M +10D" 
  });

(() => {
    'use strict'
  
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

  const options = document.getElementsByClassName('.form-select')
  Array.from(options).forEach(option => {
    option.addEventListener('click', event => {
      if(!option.onClick()) {
        event.preventDefault()
        event.stopPropagation()
        alert('Merci de choisir une option')
      }
      option.classList.add('was-validated')
    }, false)
  })
})()

