
const form = document.querySelector("#cannonsCoffeeForm");

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData.entries());

  console.log(dataObject);
  form.reset();
}

form.addEventListener("submit", onFormSubmit);