import BaseForm from './BaseForm';

class Euler extends BaseForm {
  constructor() {
    super('euler');
  }

  static nextY(xi, yi, h, f) {
    return yi + (h * f(xi + (h / 2), yi + ((h / 2) * f(xi, yi))));
  }

  static cut(num) {
    return num.toString().padEnd(5).substring(0, 5);
  }

  calc(x0, xn, n, f) {
    const h = (xn - x0) / n;

    let outString = '';

    for (let x = x0; x < xn; x += h) {
      outString += `${Euler.cut(x)} ${Euler.cut(Euler.nextY(x, f(x), h, f))}\n`;
    }
    return outString;
  }
}

export default Euler;
