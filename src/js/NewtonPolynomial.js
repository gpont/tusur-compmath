import BaseForm from './BaseForm';

class NewtonPolynomial extends BaseForm {
  getInputs(formName) {
    const inputElements = document.querySelectorAll(`#${formName} form input`);
    return [
      parseFloat(inputElements[0].value),
      inputElements[1].value.replace(' ', '').split(',').map(el => parseFloat(el)),
      inputElements[2].value.replace(' ', '').split(',').map(el => parseFloat(el)),
    ];
  }

  calc(x, xValues, yValues) {
    let res = yValues[0];

    for (let i = 1; i < xValues.length; ++i) {
      let F = 0;

      for (let j = 0; j <= i; ++j) {
        let den = 1;

        for (let k = 0; k <= i; ++k) {
          if (k !== j) {
            den *= xValues[j] - xValues[k];
          }
        }

        F += yValues[j] / den;
      }

      for (let k = 0; k < i; ++k) {
        F *= x - xValues[k];
      }
      res += F;
    }
    return res;
  }
}

export default NewtonPolynomial;
