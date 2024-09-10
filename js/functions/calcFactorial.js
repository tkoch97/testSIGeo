export const calcFactorial = number => {
  if(typeof number !== 'number' || isNaN(number)) {
     throw new Error(`Por favor, insira um número válido para o cálculo.`);
     }
if(number < 0) {
     throw new Error(`Não definimos fatoriais 
      para números negativos, por favor, insira um número natural.`)
     }
return number === 0 ? 1 : number * CalcFactorial(number-1)
}