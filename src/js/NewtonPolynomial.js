import BaseForm from './baseform';

export default class NewtonPolinomial extends BaseForm {
  constructor() {
    super('newton-polynomial');
  }

  getInputs(formName) {
    const inputElements = document.querySelectorAll(`#${formName} form input`);
    return [
      parseFloat(inputElements[0].value),
      inputElements[1].value.replace(' ', '').split(',').map(el => parseFloat(el)),
      inputElements[2].value.replace(' ', '').split(',').map(el => parseFloat(el)),
    ];
  }

  calc(x, xValues, yValues) {
    let lagrangePol = 0;

    for (let i = 0; i < xValues.length; ++i) {
      let basicsPol = 1;
      for (let j = 0; j < xValues.length; ++j) {
        if (j !== i) {
          basicsPol *= (x - xValues[j]) / (xValues[i] - xValues[j]);
        }
      }

      lagrangePol += basicsPol * yValues[i];
    }

    return lagrangePol;
  }
}
