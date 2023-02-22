import Cpf from "../../src/core/Cpf"
import Pedido from "../../src/core/Pedido"
import Produto from "../../src/core/Produto";

test("Criar pedido com CPF invalido", () => {
    const invalidCpf = () => new Cpf("11953907933");
    const fn = () => new Pedido(invalidCpf());
    expect(fn).toThrow();
})

test("Criar pedido com CPF valido", () => {
    const invalidCpf = () => new Cpf("11953907938");
    const fn = () => new Pedido(invalidCpf());
    expect(fn).not.toThrow();
})

test("Criar pedido com 3 produtos e somar", () => {
    const cpf = new Cpf("11953907938");
    const pedido = new Pedido(cpf);
    
    const casamento = new Produto('casamento', 10000, 1);
    pedido.addProduto(casamento);

    const celular = new Produto('celular', 5000, 2);
    pedido.addProduto(celular);

    const tablet = new Produto('tablet', 2000, 3);
    pedido.addProduto(tablet);

    const soma = pedido.somar();
    expect(soma).toBe(26000);
})

test("Criar pedido com 3 produtos e somar", () => {
    const cpf = new Cpf("11953907938");
    const pedido = new Pedido(cpf);
    
    const casamento = new Produto('casamento', 10000, 1);
    pedido.addProduto(casamento);

    const celular = new Produto('celular', 5000, 2);
    pedido.addProduto(celular);

    const tablet = new Produto('tablet', 2000, 3);
    pedido.addProduto(tablet);

    pedido.addCupom(50);

    const soma = pedido.somar();
    expect(soma).toBe(13000);
})