const form = document.querySelector('#email-form')
const input = document.querySelector('#email-input')
const label = document.querySelector('.error-label')
const button = document.querySelector('.button')
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', onFormSubmitted) 
button.addEventListener('click', onFormSubmitted)

function onFormSubmitted(event) {
  event.preventDefault()
  event.stopPropagation()
  const inputValue = input.value.trim()
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