export abstract class Produto {

    private _idProduto: number;
    private _name: string;
    private _desc: string;
    private _amount: number;
    private _categoria: number;
    private _qtdEstoque: number;

    constructor(idProduto: number, name: string, desc: string, amount: number, categoria: number, qtdEstoque: number) {
        this._idProduto = idProduto;
        this._name = name;
        this._desc = desc;
        this._amount = amount;
        this._categoria = categoria;
        this._qtdEstoque = qtdEstoque;
    }

    public get idProduto() {
        return this._idProduto;
    }

    public set idProduto(idProduto: number) {
        this._idProduto = idProduto;
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get desc() {
        return this._desc;
    }

    public set desc(desc: string) {
        this._desc = desc;
    }

    public get amount() {
        return this._amount;
    }

    public set amount(amount: number) {
        this._amount = amount;
    }

    public get categoria() {
        return this._categoria;
    }

    public set categoria(categoria: number) {
        this._categoria = categoria;
    }


    public get qtdEstoque() {
        return this._qtdEstoque;
    }

    public set qtdEstoque(qtdEstoque: number) {
        this._qtdEstoque = qtdEstoque;
    }

    public vender(qtd: number) {
        if (this.qtdEstoque < qtd) {
            console.log("Quantidade insuficiente para a venda")
        } else {
            this._qtdEstoque = this.qtdEstoque - qtd
        }
    }

    public receber(qtd: number): void {
        this.qtdEstoque = this.qtdEstoque + qtd
    }


    public visualizar(): void {

        let categoria: string = this.categoria == 1 ? "Teclado" : "Mouse"

        console.log("\n\n*****************************************************");
        console.log("               Dados do Produto:                         ");
        console.log("*****************************************************");
        console.log("Identificação do Produto: " + this._idProduto);
        console.log("Produto: " + this._name);
        console.log("Categoria do Periférico: " + categoria);
        console.log("Valor: R$" + this._amount);
        console.log("Unidades em estoque: " + this._qtdEstoque);

    }

}