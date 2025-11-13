import { Produto } from "../model/Produto";

export interface ProdutoRepository {

	procurarPorID(numero: number): void;
	listarTodos(): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(numero: number): void;
	
	// Métodos Bancários
	vender(numero: number, valor: number): void;
	receber(numero: number, valor: number): void;
	sorte():void
}
