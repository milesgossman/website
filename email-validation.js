const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  const emailValue = emailInput.value.trim();

  if (!isValidEmail(emailValue)) {
    errorMessage.textContent = 'Please enter a valid email address with at least 2 characters after the last dot.';
    return;
  }

  // Submit the form if the email is valid
  form.submit();
});

function isValidEmail(email) {
  const lastDotIndex = email.lastIndexOf('.');
  const domain = email.slice(lastDotIndex + 1);
  return lastDotIndex > -1 && domain.length >= 2;
}