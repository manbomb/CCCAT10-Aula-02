import Cpf from "../../src/core/Cpf";

test("CPF Válido 119.539.079-38", () => {
    const fn = () => new Cpf('119.539.079-38');
    expect(fn).not.toThrow();
});

test("CPF INválido 119.539.079-38", () => {
    const fn = () => new Cpf('119.539.079-34');
    expect(fn).toThrow();
});