const form = document.querySelector('#email-form')
const input = document.querySelector('#email-input')
const label = document.querySelector('.error-label')
const button = document.querySelector('.button')
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', validateEmail) 
input.addEventListener('input', validateEmail)
button.addEventListener('click', (event) => {
  const inputValue = input.value.trim();
  validateEmail(event)
  if (isEmail(inputValue)) {
    alert('email validated!!!')
  }
})

function validateEmail(event) {
  event.preventDefault()
  event.stopPropagation()
  const inputValue = input.value.trim();
  if (!isEmail(inputValue)) { 
    input.classList.add('was-validated')
    errorMessage.style.display = 'block'
    label.style.display = 'block'
  } else {
    input.classList.remove('was-validated')
    errorMessage.style.display = 'none'
    label.style.display = 'none'
  }
}

function isEmail (input) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
}