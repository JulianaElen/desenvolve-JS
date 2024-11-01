// Neste exercício, você vai criar 5 funções. Você pode escolher entre usar function ou arrow function: 

// - Soma: recebe dois números e retorna a soma
function soma(num1, num2){
    return num1 + num2;
}
// - Subtrai: recebe dois números e retorna a diferença
function subtrai(num1, num2){
    return num1 - num2;
}
// - Multiplica: recebe dois números e retorna o produto
function multiplica(num1, num2){
    return num1 * num2;
}
// - Divide: recebe dois números e retorna o quociente
function divide(num1, num2){
    return num1 / num2;
}
// - MostraResultado: recebe dois numeros e executa um console para cada operação, exibindo o nome da operação e o resultado

// Seu console deve ter o formato:

// console.log([nome_da_operacao] entre ${num1} e ${num2}, fn(num1, num2))

function mostraResultado(num1, num2){
    console.log('Soma entre ' + num1 + ' e ' + num2 + ', ' + soma(num1, num2))
    console.log('Subtração entre ' + num1 + ' e ' + num2 + ', ' + subtrai(num1, num2))
    console.log('Divisão entre ' + num1 + ' e ' + num2 + ', ' + divide(num1, num2))
    console.log('Multiplicação entre ' + num1 + ' e ' + num2 + ', ' + multiplica(num1, num2))
}

mostraResultado(4, 2);