export default class Euler {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelector("#euler_calc").addEventListener("click", () => {
                let x0 = parseFloat(document.querySelector("#euler_input_x0").value);
                let xn = parseFloat(document.querySelector("#euler_input_xn").value);
                let n = parseFloat(document.querySelector("#euler_input_n").value);
                let f = eval(document.querySelector("#euler_input_f").value);
                document.querySelector("#euler_output pre").innerText = Euler.calc(x0, xn, n, f);
            });
        });
    }

    static nextY(xi, yi, h, f) {
        return yi + h * f(xi + h / 2, yi + h / 2 * f(xi, yi));
    }

    static cut(num) {
        return num.toString().padEnd(5).substring(0, 5);
    }

    static calc(x0, xn, n, f) {
        let outString = '';
        const h = (xn - x0) / n;
        let x = x0;
        while (x < xn) {
            outString += `${Euler.cut(x)} ${Euler.cut(Euler.nextY(x, f(x), h, f))}\n`;
            x += h;
        }
        return outString;
    };
};
