export const calcFibonacci = (target) => {
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
 console.log(result);
 return result
}