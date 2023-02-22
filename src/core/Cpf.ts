export default class Cpf {
    constructor(
        readonly cpf: string
    ) {
        if (!this.validate(cpf)) {
            throw "CPF inválido!";
        }
    }

    private onlyNumbersFilter(str: string): string {
        const replacedStr = str.replace(/\D/g, '');
        return replacedStr;
    }

    validate(cpf: string): boolean {
        if (!cpf) return false;

        const clearCpf = this.onlyNumbersFilter(cpf);
        const length = clearCpf.length;

        if (length < 11 || length > 14) return false;

        const firstDigit = clearCpf[0];
        const digits = clearCpf.split("");
        const everyDigitsEqualToFirst = digits.every(digit => digit === firstDigit);

        if (everyDigitsEqualToFirst) return true;

        try {
            let d1 = 0;
            let d2 = 0;

            for (let i = 0; i < length - 2; i++) {
                const digito = parseInt(clearCpf[i]);
                d1 = d1 + ((10 - i) * digito);
                d2 = d2 + ((11 - i) * digito);
            };

            let rest = (d1 % 11);

            const dg1 = (rest < 2) ? 0 : 11 - rest;
            d2 += 2 * dg1;

            rest = (d2 % 11);
            const dg2 = (rest < 2) ? 0 : 11 - rest;

            let nDigVerific = clearCpf.substring(length - 2, length);
            const nDigResult = "" + dg1 + "" + dg2;
            return nDigVerific === nDigResult;
        } catch (e) {
            return false;
        }
    }
}