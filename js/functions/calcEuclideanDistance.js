export const calcEuclidiana = (x1, y1, x2, y2) => {
  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    throw new Error('Por favor, insira valores válidos para o cálculo');
  } else {
    const distA = {
        x: x1,
        y: y1
    }
    const distB = {
        x: x2,
        y: y2
    }
    
    const difX = distA.x - distB.x
    const difY = distA.y - distB.y
  
    return Math.sqrt((difX * difX) + (difY * difY)).toFixed(1);
  }
  
}