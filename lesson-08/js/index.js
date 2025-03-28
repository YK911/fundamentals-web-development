const subForm = document.forms.subscriptionForm;

subForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;

  const { userName, userEmail, userPass, payment, musicService } =
    form.elements;

  console.log(userName.value);
  console.log(userEmail.value);
  console.log(userPass.value);
  console.log(payment.value);

  [...musicService].forEach(el => {
    if (el.checked) {
      console.log(el.value);
    }
  });

  form.reset();
}

const rangeEl = document.querySelector("#range");
const outputEl = document.querySelector(".out");
outputEl.textContent = rangeEl.value;

rangeEl.addEventListener("input", onRangeChange);

function onRangeChange(event) {
  outputEl.textContent = event.target.value;
}
