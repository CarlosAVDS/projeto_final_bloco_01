import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.green,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                       LÁBUM                         ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Produtos                   ");
        console.log("            5 - Excluir Produto                      ");
        console.log("            6 - ⚅ Teste a sua Sorte ⚅               ");
        console.log("            7 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
            
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 7) {
            console.log("\nLábum - Explosão de promoções, pediu, chegou!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");

                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                break;
            case 3:
                console.log("\n\nBuscar Produto por ID\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar Produtos\n\n");

                break;
            case 5:
                console.log("\n\nExcluir Produto\n\n");

                break;
            case 6:
                console.log("\n\n⚅ Teste a sua Sorte ⚅\n");
                console.log("Teste sua sorte é uma opção onde sera gerado aleatoriamente um desconto de 5-15% em um produto aleatório\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("             Projeto Desenvolvido por: Carlos");
    console.log("       Generation Brasil - generation@generation.org");
    console.log("              github.com/CarlosAVDS");
    console.log("*****************************************************");
}

main();