import BaseForm from './BaseForm';

class IntLeftRectangle extends BaseForm {
  calc(a, b, n, f) {
    const h = (b - a) / n;

    let res = 0;

    for (let i = 0; i < n - 1; i++) {
      const x = a + i * h;
      res += f(x);
    }

    res *= h;

    return res;
  }
}

export default IntLeftRectangle;
