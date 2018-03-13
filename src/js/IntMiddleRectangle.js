import BaseForm from './BaseForm';

class IntMiddleRectangle extends BaseForm {
  constructor() {
    super('int-mid-rect');
  }

  calc(x0, xn, n, f) {
    const h = (xn - x0) / n;

    let res = 0;

    for (let i = 0; i < n - 1; i++) {
      const xi = x0 + i * h;
      const xNext = xi + h;
      res += f((xi + xNext) / 2);
    }

    res *= h;

    return res;
  }
}

export default IntMiddleRectangle;
