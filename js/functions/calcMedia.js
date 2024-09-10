export const calcMedia = (av1, av2) => {
  const media = (av1 + av2) / 2;

    if(typeof av1 !== 'number' || typeof av2 !== 'number' || isNaN(av1) || isNaN(av2)) {
        throw new Error(`Por favor, insira um número válido para o cálculo.`);
    }
    if(av1 < 0 || av2 < 0) {
        throw new Error(`Por favor, insira apenas números naturais`);
    }
    if(media >= 7) {
        return `média igual a ${media}. O Aluno foi aprovado!`
    } else if(media <= 5) {
        return `média igual a ${media}. O Aluno está reprovado!`
    } else {
        return `média igual a ${media}. O Aluno deverá fazer a prova final.`
    }
}