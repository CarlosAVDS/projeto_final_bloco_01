import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {


    private listaProdutos: Array<Produto> = new Array<Produto>()
    numero: number = 0


    listarTodos(): void {
        for (let prod of this.listaProdutos) {
            prod.visualizar()
        }
    }

    procurarPorID(numero: number): void {
        let buscaProd = this.buscarNoArray(numero);
        if (buscaProd != null) {
            buscaProd.visualizar();
        } else
            console.log(colors.fg.red, "\nO Produto com ID: " + numero + " não foi encontrado!", colors.reset);
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.green, "\n O produto: " + produto.name + " foi criado com sucesso!", colors.reset);
    }
    atualizar(produto: Produto): void {
        let buscaProd = this.buscarNoArray(produto.idProduto);
        if (buscaProd != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProd)] = produto;
            console.log(colors.fg.green, "\nO Produto numero: " + produto.idProduto + " foi atualizado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO Produto numero: " + produto.idProduto + " não foi encontrado!", colors.reset);
    }
    deletar(numero: number): void {
        let buscaProd = this.buscarNoArray(numero);
        if (buscaProd != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProd), 1);
            console.log(colors.fg.green, "\nO Produto numero: " + numero + "foi apagado com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nO Produto numero: " + numero + " não foi encontrado!", colors.reset);
        }
    }
    vender(numero: number, valor: number): void {
        let produto = this.buscarNoArray(numero);
        if (produto != null) {
            if (produto.vender(valor) == true)
                console.log(colors.fg.green, "\n A venda do Produto: " + numero + "foi efetuado com sucesso!", colors.reset); numero
        } else
            console.log(colors.fg.red, "\nO Produto numero: " + numero + " não foi encontrado!", colors.reset);
    }
    receber(numero: number, valor: number): void {
        let produto = this.buscarNoArray(numero);
        if (produto != null) {
            produto.receber(valor);
            console.log(colors.fg.green, "\nO recebimento do Produto numero: " + numero + " foi efetuado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO Produto numero: " + numero + " não foi encontrado!", colors.reset);
    }

    sorte(): void {
        if (this.listaProdutos.length === 0) {
            console.log(colors.fg.red, "\nNenhum produto cadastrado para aplicar desconto.", colors.reset);
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * this.listaProdutos.length);
        const produtoSelecionado = this.listaProdutos[indiceAleatorio];
        if (!produtoSelecionado) {
            console.log(colors.fg.red, "\nErro: produto selecionado inválido.", colors.reset);
            return;
        }

        const valorOriginal = Number(produtoSelecionado.amount);
        if (isNaN(valorOriginal)) {
            console.log(colors.fg.red, `\nErro: campo 'valor' inválido no produto ID ${produtoSelecionado.idProduto}.`, colors.reset);
            return;
        }

        const descontoPercentual = Math.random() * (15 - 5) + 5;
        const valorComDesconto = +(valorOriginal * (1 - descontoPercentual / 100)).toFixed(2);

        produtoSelecionado.amount = valorComDesconto;

        console.log(colors.fg.cyan, `\nDesconto de ${descontoPercentual.toFixed(2)}% aplicado no produto "${produtoSelecionado.name}".`, colors.reset);
        console.log(colors.fg.green, `Valor original: R$${valorOriginal.toFixed(2)} → Novo valor: R$${produtoSelecionado.amount.toFixed(2)}`, colors.reset);
    }

    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Produto | null {
        for (let prod of this.listaProdutos) {
            if (prod.idProduto === numero)
                return prod;
        }
        return null;
    }
}