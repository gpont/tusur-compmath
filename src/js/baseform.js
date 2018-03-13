export default class BaseForm {
  constructor(formName) {
    document.addEventListener('DOMContentLoaded', () => this.page(formName));
  }

  page(formName) {
    const form = document.querySelector(`#${formName} form`);
    const output = document.querySelector(`#${formName} pre`);
    const clearButton = document.querySelector(`#${formName} button[type="button"]`);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      output.innerText = this.calc(...this.getInputs(formName));
    });
    clearButton.addEventListener('click', () => {
      output.innerText = '';
    });
  }

  getInputs(formName) {
    const funcInput = document.querySelector(`#${formName} input[type="text"]`);
    const inputElements = document.querySelectorAll(`#${formName} form input[type="number"]`);
    const inputs = Array.from(inputElements).map(el => parseFloat(el.value));
    // eslint-disable-next-line no-eval
    inputs.push(eval(funcInput.value));
    return inputs;
  }

  calc() {}
}
