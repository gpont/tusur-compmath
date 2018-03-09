import $ from 'jquery';

export default class Euler {
    constructor() {
        $(document).ready(() => {
            $("#calc").click(() => {
                let x0 = parseFloat($("#input_x0").val());
                let xn = parseFloat($("#input_xn").val());
                let n = parseFloat($("#input_n").val());
                let f = eval($("#input_f").val());
                $("#output").innerText = Euler.calc(x0, xn, n, f);
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
