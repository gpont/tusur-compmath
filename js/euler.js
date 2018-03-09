'use strict';

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calc").addEventListener("click", () => {
        let x0 = parseFloat(document.getElementById("input_x0").value);
        let xn = parseFloat(document.getElementById("input_xn").value);
        let n = parseFloat(document.getElementById("input_n").value);
        let f = eval(document.getElementById("input_f").value);
        document.getElementById("output").innerText = euler(x0, xn, n, f);
    });
});

const nextY = (xi, yi, h, f) => yi + h * f(xi + h/2, yi + h/2 * f(xi, yi));

const cut = (num) => num.toString().padEnd(5).substring(0, 5);

const euler = (x0, xn, n, f) => {
    let outString = '';
    const h = (xn - x0) / n;
    let x = x0;
    while (x < xn) {
        outString += `${cut(x)} ${cut(nextY(x, f(x), h, f))}\n`;
        x += h;
    }
    return outString;
};
