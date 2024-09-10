# Teste de Lógica Estágio SIGeo - como realizei:

*Exercício 1:* Para realizar o primeiro exercício eu pesquisei como funciona a lógica de cálculo de números fatoriais, que é pegundo um número específico e multiplica-lo pelos seus antecessores positivos, até chegar em 1. Também vi que por padrão, o fatorial de 0 é 1.
Entao desenvolvi uma função recursiva que verifica se o número de entrada é negativo, se for, o cálculo não é feito e retorno um erro.
depois, com uma função ternárria eu verifico se o número é igual a zero, se for automaticamnte retorno o 1. Se for diferente de 0, multiplico o próprio número pelo antecessor dele chamando a função novamente com (number - 1), até que pare no 0 e retorne o valor das multiplicações.

*Exercício 2:* Para realizar o segundo execício, criei uma função que recebe dois valores (av1 e av2), logo em seguida calculo a média e armazeno numa variável.
Fiz umas verificações para que a função não receba valores que não são números, valores vazios ou negativos.
Depois criei condições que verificam se o valor da média é maior que 7 para retornar uma aprovação, menor que 5 para reprovação, e se não entrar em nenhuma das duas, automaticamente o valor estão entre elas, retornando que o aluno deve fazer a prova final.

*Exercício 3:* Foi necessário partir de um estudo sobre como aplicar a distância euclidiana. Precisei entender como eram calculados os pontos recebidos através do parâmetro. Entendi que existiam dois pontos, que guardaram 2 eixos. X e Y.

Para calcular, primeiramente gerei dois objetos e armazenei os seus respectivos valores em chaves/valor.
Com os valores definidos, pude calcular a diferença entre as coordenadas.
Deipos disso, precisei elevar cada diferença ao quadrado, fazer sua soma e tirar a raiz quadrada do resultado, obtendo a distância aproximada entre os dois pontos. Utilizei o .toFixed(1) para ajustar o número de casas decimais em 1 após a vírgula.

*Exercício 4:* Para realizar esse exercício, precisei analizar a sequência de Fibonacci, e procurei dividir a sequência em 1 bloco de 3 elementos (0, 1, 1), onde:

- O número atual (currentNum) começa como zero, é impresso na tela e depois assume o valor do segundo número (secondNum)
- O segundo número (secondNum) por sua vez, começa com o valor de currentNum + 1. E após currentNum assumir o valor do secondNum, este assume o valor da variável auxiliar (aux).
- A variável auxiliar (aux) tem como valor o resultado da soma de currentNum e secondNum. E tem como função armazenar o valor do terceiro elemento.

A lógica fica dentro de um laço de repetição for, orientado pelo valor de target, referência passada através da função CalcFibonacci.









