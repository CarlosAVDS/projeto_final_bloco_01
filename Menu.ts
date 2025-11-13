import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Produto } from "./src/model/Produto";
import { Teclado } from "./src/model/Teclado";
import { Mouse } from "./src/model/Mouse";
import { ProdutoController } from "./src/controller/ProdutoController";


export function main() {

    let produto: ProdutoController = new ProdutoController()
    let opcao: number;

    let idProduto, amount, categoria, qtdEstoque, tamanho, dpi, attRate, buttons, numero: number
    let name, desc, type, typeSwitch, iluminacao, keyCaps: string
    const tipoProduto = ["Teclado", 'Mouse']

    let ptecla1: Teclado = new Teclado(produto.gerarNumero(), "Redragon Lakshmi", "Para os gamers que procuram deixar o máximo de espaço possível sobre a mesa, o Redragon Lakshmi vem no layout compacto 60% ABNT2.  Contando com um cabo removível USB-C, o Lakshmi é um modelo muito portátil para aqueles usuários que buscam praticidade na hora levar seus equipamentos. Sem deixar de lado a qualidade na sua construção, as keycaps do Lakshmi são feitas com o método de double shot injection para a longevidade das marcações.", 135.89, 1, 138, "Mecanico", "Rainbow Brown", "RGB", "PBT", 60)
    produto.cadastrar(ptecla1);

    let ptecla2: Teclado = new Teclado(produto.gerarNumero(), "HyperX Alloy Origins Core", "O HyperX Alloy Origins Core é um teclado com menos dez teclas resistente e ultracompacto com chaves de teclas mecânicas exclusivas HyperX projetado para proporcionar aos gamers a melhor combinação de estilo, desempenho e confiabilidade. Essas chaves de teclas possuem LEDs aparentes para uma iluminação deslumbrante com uma força de atuação e distância de curso elegantemente equilibradas para melhor resposta e precisão.", 459.99, 1, 373, "Mecanico", "HyperX Red", "RGB", "PBT", 65)
    produto.cadastrar(ptecla2);

    let pmou1: Mouse = new Mouse(produto.gerarNumero(), "Logitech G502 HERO", " Seu mouse gamer favorito de alto desempenho oferece uma funcionalidade mais precisa do que nunca. Agora, personalize a iluminação RGB para combinar com seu estilo e ambiente ou sincronize com outros produtos Logitech G. O G502 apresenta nosso sensor HERO 25K de última geração para máxima precisão e exatidão de rastreamento. Não importa o seu estilo de jogo, é fácil ajustar o G502 HERO para atender às suas necessidades, com perfis personalizados para seus jogos, sensibilidade ajustável de 400 a 25.600 DPI e um sistema de peso ajustável que permite ajuste e balanceamento de até cinco 3,6g pesos para o equilíbrio e a sensação corretos", 311.99, 2, 612, 25600, 1000, 11)
    produto.cadastrar(pmou1);

    let pmou2: Mouse = new Mouse(produto.gerarNumero(), "Logitech G903 LIGHTSPEED", "O mouse gamer Logitech G903 LIGHTSPEED agora com sensor para jogos HERO 25K de última geração para uma jogabilidade incrivelmente precisa com rastreamento 1: 1, 400 IPS, além de suavização, filtragem ou aceleração zero. A tecnologia sem fio LIGHTSPEED oferece uma taxa de transmissão de 1ms sem comprometer o peso, a duração da bateria ou a latência. Tenha completa imersão com aproximadamente 16.8 milhões de cores que respondem as ações no jogo, design ambidestro e 11 botões personalizáveis. Continue a jogar com rastreamento aprimorado, 10 vezes mais eficiência de energia dos sensores da geração anterior e até 140 horas de jogo.", 549.99, 2, 260, 16000, 1000, 11)
    produto.cadastrar(pmou2);

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

                console.log("Digite o Nome do Produto: ");
                name = readlinesync.question("");

                console.log("Digite a Descrição do Produto: ");
                desc = readlinesync.question("");

                console.log("\nDigite o tipo da Produto: ");
                categoria = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                console.log("\nDigite o Valor do produto (R$): ");
                amount = readlinesync.questionFloat("");

                console.log("\nDigite a Quantidade em Estoque: ");
                qtdEstoque = readlinesync.questionInt("");

                switch (categoria) {
                    case 1:
                        console.log("Digite o Tipo de Teclado (Membrana/Mecanico): ");
                        type = readlinesync.question("");

                        console.log("Digite Tipo de Switch, caso tenha: ");
                        typeSwitch = readlinesync.question("");

                        console.log("Digite o Padrão de Iluminação, caso tenha: ");
                        iluminacao = readlinesync.question("");

                        console.log("Digite o Material das teclas: ");
                        keyCaps = readlinesync.question("");

                        console.log("Digite o Tamanho do Teclado: ");
                        tamanho = readlinesync.questionInt("");

                        produto.cadastrar(
                            new Teclado(produto.gerarNumero(), name, desc, amount, categoria, qtdEstoque, type, typeSwitch, iluminacao, keyCaps, tamanho));
                        break;
                    case 2:
                        console.log("Digite o DPI do Mouse: ");
                        dpi = readlinesync.questionInt("");

                        console.log("Digite a Taxa de Atualização(Hz): ");
                        attRate = readlinesync.questionInt("");

                        console.log("Digite a Quantidade de Botões: ");
                        buttons = readlinesync.questionInt("");

                        produto.cadastrar(new Mouse(produto.gerarNumero(), name, desc, amount, categoria, qtdEstoque, dpi, attRate, buttons));
                        break;
                }
                keyPress()
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                produto.listarTodos()
                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar Produto por ID\n\n");

                console.log("Digite o ID do Produto: ");
                numero = readlinesync.questionInt("");

                produto.procurarPorID(numero);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar Produtos\n\n");

                console.log("Digite o número do Produto: ");
                numero = readlinesync.questionInt("");

                let produtos = produto.buscarNoArray(numero);

                if (produtos != null) {
                    console.log("Digite o Nome do Produto: ");
                    name = readlinesync.question("");

                    console.log("Digite a Descrição do Produto: ");
                    desc = readlinesync.question("");

                    console.log("\nDigite o tipo da Produto: ");
                    categoria = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                    console.log("\nDigite o Valor do produto (R$): ");
                    amount = readlinesync.questionFloat("");

                    console.log("\nDigite a Quantidade em Estoque: ");
                    qtdEstoque = readlinesync.questionInt("");

                    switch (categoria) {
                        case 1:
                            console.log("Digite o Tipo de Teclado (Membrana/Mecanico): ");
                            type = readlinesync.question("");

                            console.log("Digite Tipo de Switch, caso tenha: ");
                            typeSwitch = readlinesync.question("");

                            console.log("Digite o Padrão de Iluminação, caso tenha: ");
                            iluminacao = readlinesync.question("");

                            console.log("Digite o Material das teclas: ");
                            keyCaps = readlinesync.question("");

                            console.log("Digite o Tamanho do Teclado: ");
                            tamanho = readlinesync.questionInt("");

                            produto.cadastrar(
                                new Teclado(produto.gerarNumero(), name, desc, amount, categoria, qtdEstoque, type, typeSwitch, iluminacao, keyCaps, tamanho));
                            break;
                        case 2:
                            console.log("Digite o DPI do Mouse: ");
                            dpi = readlinesync.questionInt("");

                            console.log("Digite a Taxa de Atualização(Hz): ");
                            attRate = readlinesync.questionInt("");

                            console.log("Digite a Quantidade de Botões: ");
                            buttons = readlinesync.questionInt("");

                            produto.cadastrar(new Mouse(produto.gerarNumero(), name, desc, amount, categoria, qtdEstoque, dpi, attRate, buttons));
                            break;
                    }
                } else {
                    console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);
                }


                keyPress()
                break;
            case 5:
                console.log("\n\nExcluir Produto\n\n");
                console.log("Digite o ID do Produto: ");
                numero = readlinesync.questionInt("");
                produto.deletar(numero);
                keyPress()
                break;
            case 6:
                console.log("\n\n⚅ Teste a sua Sorte ⚅\n");
                console.log("Teste sua sorte é uma opção onde sera gerado aleatoriamente um desconto de 5-15% em um produto aleatório\n");
                produto.sorte()
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