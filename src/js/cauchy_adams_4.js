import BaseForm from './baseform';

class CauchyAdams4 extends BaseForm {
  constructor() {
    super('cauchy-adams-4');
  }

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

export default CauchyAdams4;
