const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  let email = form.elements.email.value;
  let password = form.elements.password.value;

  if (email.trim() === '' || password.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formObj = {
    email: email,
    password: password,
  };

  console.log(formObj);
  form.reset();
}
