class CauchyAdams4 {
  static page(form) {
    document.addEventListener('DOMContentLoaded', () => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();

        const x0 = parseFloat(document.querySelector('#cauchy_adams_4_x0').value);
        const xn = parseFloat(document.querySelector('#cauchy_adams_4_xn').value);
        const n = parseFloat(document.querySelector('#cauchy_adams_4_n').value);
        // eslint-disable-next-line no-eval
        const f = eval(document.querySelector('#cauchy_adams_4_f').value);
        document.getElementById('output').innerText = CauchyAdams4.calc(x0, xn, n, f);
      });
    });
  }

  static calc(a, b, n, f) {
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
