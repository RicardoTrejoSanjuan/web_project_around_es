const showInputError = (form, input, errorMessage) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_visible");
};

const hideInputError = (form, input) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove("popup__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("popup__error_visible");
};

const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);

    return;
  }

  hideInputError(form, input);
};

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => !input.validity.valid);
};

const toggleButtonState = (inputs, button) => {
  if (hasInvalidInput(inputs)) {
    button.disabled = true;
    return;
  }

  button.disabled = false;
};

const setEventListeners = (form) => {
  const inputs = Array.from(form.querySelectorAll(".popup__input"));
  const submitButton = form.querySelector(".popup__button");

  toggleButtonState(inputs, submitButton);

  for (const input of inputs) {
    input.addEventListener("input", () => {
      checkInputValidity(form, input);
      toggleButtonState(inputs, submitButton);
    });
  }
};

export const enableValidation = () => {
  const forms = document.forms;

  for (const form of forms) {
    setEventListeners(form);
  }
};

export const resetValidation = (form) => {
  const inputs = Array.from(form.querySelectorAll(".popup__input"));
  const submitButton = form.querySelector(".popup__button");

  inputs.forEach((input) => {
    hideInputError(form, input);
  });

  toggleButtonState(inputs, submitButton);
};
