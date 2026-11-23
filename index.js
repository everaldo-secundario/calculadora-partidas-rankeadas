function calcularRankeadas(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível do jogador
    let nivel = "";

    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return {
        saldoVitorias,
        nivel
    };
}

const vitorias = 85;
const derrotas = 20;

const resultado = calcularRankeadas(vitorias, derrotas);

console.log(
    `O Herói tem saldo de ${resultado.saldoVitorias} ` +
    `está no nível de ${resultado.nivel}`
);
