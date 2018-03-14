import BaseForm from './BaseForm';

class LinearSystem extends BaseForm {
  getInputs(formName) {
    const el = document.querySelector(`#${formName} form textarea`);
    return el.innerText.split('\n').map(line => line.replace(' ', '').split(',').map(num => parseFloat(num)));
  }

  calc(matrix) {
    const N = matrix[0].length;
    // matrix check for consistency
    for (let i = 1; i < N; ++i) {
      for (let j = 1; j < N; ++j) {
        if (j !== i && Math.abs(matrix[i][j]) >= Math.abs(matrix[i][i])) {
          return 'Матрица не совместна';
        }
      }
    }

    const X = new Array(N);
    const B = matrix.map(line => line[N]);

    // Seidel algorithm
    let m = 0;
    do {
      m = 0;
      for (let i = 1; i < N; ++i) {
        let s = 0;
        for (let j = 1; j < N; ++j) {
          if (i !== j) {
            s += matrix[i][j] * X[j];
          }
          const v = X[i];
          X[i] = (B[i] - s) / matrix[i][i];
          m = Math.abs(X[i] - v);
        }
      }
    } while (m > Math.exp(1));

    return X.map((el, i) => `x[${i}] = ${el}\n`);
  }
}

export default LinearSystem;
