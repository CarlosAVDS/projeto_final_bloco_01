import { Produto } from "./Produto";

export class Mouse extends Produto {
    private _dpi: number
    private _attRate: number
    private _buttons: number

    constructor(idProduto: number, name: string, desc: string, amount: number, categoria: number, qtdEstoque: number, dpi: number, attRate: number, buttons: number) {
        super(idProduto, name, desc, amount, categoria, qtdEstoque)
        this._dpi = dpi
        this._attRate = attRate
        this._buttons = buttons
    }

    public get dpi() {
        return this._dpi;
    }

    public set dpi(dpi: number) {
        this._dpi = dpi;
    }

    public get attRate() {
        return this._attRate;
    }

    public set attRate(attRate: number) {
        this._attRate = attRate;
    }

    public get buttons() {
        return this._buttons;
    }

    public set buttons(buttons: number) {
        this._buttons = buttons;
    }


    public visualizar(): void {
        super.visualizar()
        console.log("DPI Máximo: \t\t" + this._dpi);
        console.log("Taxa de Atualização: \t\t" + this._attRate +"Hz");
        console.log("Botões: \t\t" + this._buttons + "%");

    }
}