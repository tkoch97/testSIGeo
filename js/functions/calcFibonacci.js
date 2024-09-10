export const calcFibonacci = (target) => {
    if(isNaN(target)) {
        throw new Error('Por favor, insira um número válido para o cálculo.')
    } else {
        let currentNum = 0, 
        secondNum = currentNum + 1, 
        aux = currentNum + secondNum,
        result = []
    
     for(let i = 1; i <= target; i++) {
         result.push(currentNum);
         currentNum = secondNum;
         secondNum = aux;
         aux = currentNum + secondNum;
     }
     return result
    }
}