import Cpf from "../../src/core/Cpf";

test("CPF Válido 119.539.079-38", () => {
    const fn = () => new Cpf('119.539.079-38');
    expect(fn).not.toThrow();
});

test("CPF INválido 119.539.079-38", () => {
    const fn = () => new Cpf('119.539.079-34');
    expect(fn).toThrow();
});

test("CPF vazio", () => {
    const fn = () => new Cpf('');
    expect(fn).toThrow();
});

test("CPF pequeno", () => {
    const fn = () => new Cpf('123');
    expect(fn).toThrow();
});

test("CPF de dígitos iguais", () => {
    const fn = () => new Cpf('11111111111');
    expect(fn).toThrow();
});

test("CPF de dígitos verificadores 00", () => {
    const fn = () => new Cpf('264.799.160-00');
    expect(fn).not.toThrow();
});