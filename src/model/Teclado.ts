import { Produto } from "./Produto";

export class Teclado extends Produto {
    private _type: string
    private _typeSwitch: string
    private _iluminacao: string
    private _keyCaps: string
    private _tamanho: number

    constructor(idProduto: number, name: string, desc: string, amount: number, categoria: number, qtdEstoque: number, type: string, typeSwitch: string, iluminacao: string, keyCaps: string, tamanho: number) {
        super(idProduto, name, desc, amount, categoria, qtdEstoque)
        this._type = type
        this._typeSwitch = typeSwitch
        this._iluminacao = iluminacao
        this._keyCaps = keyCaps
        this._tamanho = tamanho

    }

    public get type() {
        return this._type;
    }

    public set type(type: string) {
        this._type = type;
    }

    public get typeSwitch() {
        return this._typeSwitch;
    }

    public set typeSwitch(typeSwitch: string) {
        this._typeSwitch = typeSwitch;
    }

    public get iluminacao() {
        return this._iluminacao;
    }

    public set iluminacao(iluminacao: string) {
        this._iluminacao = iluminacao;
    }

    public get keyCaps() {
        return this._keyCaps;
    }

    public set keyCaps(keyCaps: string) {
        this._keyCaps = keyCaps;
    }

    public get tamanho() {
        return this._tamanho;
    }

    public set tamanho(tamanho: number) {
        this._tamanho = tamanho;
    }


    public visualizar(): void {
        super.visualizar()
        console.log("Tipo de Teclado: \t\t" + this._type);
        if (this.typeSwitch != '') { console.log("Tipo de Switch: \t\t" + this._typeSwitch); }
        console.log("Iluminação: \t\t" + this._iluminacao);
        console.log("Tipo de Teclas: \t\t" + this._keyCaps);
        console.log("Tamanho: \t\t" + this._tamanho + "%");

    }
}