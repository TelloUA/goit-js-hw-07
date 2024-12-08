const textInput = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

textInput.addEventListener('input', event => {
  text = event.currentTarget.value.trim();
  result = text ? text : 'Anonymous';
  output.textContent = result;
});
