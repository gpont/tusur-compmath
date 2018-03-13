export default class BaseForm {
  constructor(formName) {
    document.addEventListener('DOMContentLoaded', BaseForm.page.bind(this, formName));
  }

  static page(formName) {
    const form = document.querySelector(`#${formName} form`);
    const inputs = document.querySelectorAll(`#${formName} form input[type="number"]`);
    const output = document.querySelector(`#${formName} pre`);

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const args = Array.from(inputs).map(el => parseFloat(el.value));
      // eslint-disable-next-line no-eval
      args.push(eval(form.querySelector('input[type="text"]').value));
      output.innerText = this.calc(...args);
    });
    form.querySelector('button[type="button"]').addEventListener('click', () => {
      output.innerText = '';
    });
  }

  calc() {}
}
