import Cpf from "./Cpf";
import Produto from "./Produto"

export default class Pedido {
    private produtos: Array<Produto>;
    private desconto: number;

    constructor(
        private readonly cpf: Cpf
    ) {
        this.produtos = [];
        this.desconto = 0;
    }

    addCupom(percentage: number) {
        const float = percentage / 100;
        this.desconto = float;
    }

    addProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    somar(): number {
        const precos = this.produtos.map(({ preco, quantidade }) => preco * quantidade);
        const somaDePrecos = precos.reduce((sum, preco) => sum + preco, 0);
        const somaDePrecosComDesconto = somaDePrecos * (1 - this.desconto);
        return somaDePrecosComDesconto;
    }
}