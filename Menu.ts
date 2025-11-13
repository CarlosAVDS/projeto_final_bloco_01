import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Produto } from "./src/model/Produto";
import { Teclado } from "./src/model/Teclado";
import { Mouse } from "./src/model/Mouse";


export function main() {

    let opcao: number;

    const teclado: Teclado = new Teclado(1, "GK123", "Teclado mecanico gamer", 250, 1, 500, "Mecanico", "", "RGB", "PBT", 65)
    teclado.visualizar()
    teclado.vender(100)
    teclado.visualizar()
    teclado.receber(99)
    teclado.visualizar()

    const mouse: Mouse = new Mouse(1, "G345", "Mouse gamer", 250, 2, 40, 1800, 1000, 8)
    mouse.visualizar()
    mouse.vender(10)
    mouse.visualizar()
    mouse.receber(99)
    mouse.visualizar()

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

                keyPress()
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar Produto por ID\n\n");

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar Produtos\n\n");

                keyPress()
                break;
            case 5:
                console.log("\n\nExcluir Produto\n\n");

                keyPress()
                break;
            case 6:
                console.log("\n\n⚅ Teste a sua Sorte ⚅\n");
                console.log("Teste sua sorte é uma opção onde sera gerado aleatoriamente um desconto de 5-15% em um produto aleatório\n");

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress()
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

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();