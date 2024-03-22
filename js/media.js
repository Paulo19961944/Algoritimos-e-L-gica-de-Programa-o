// PROGRAMA PARA CALCULAR A MÉDIA DE 4 NOTAS
let nota1 = parseFloat(prompt("Digite a primeira nota:")); // Exibe na tela uma caixa de entrada para receber a primeira nota
let nota2 = parseFloat(prompt("Digite a segunda nota:")); // Exibe na tela uma caixa de entrada para receber a segunda nota
let nota3 = parseFloat(prompt("Digite a terceira nota:")); // Exibe na tela uma caixa de entrada para receber a terceira nota
let nota4 = parseFloat(prompt("Digite a quarta nota:")); // Exibe na tela uma caixa de entrada para receber a quarta nota
let media = (nota1 + nota2 + nota3 + nota4) / 4; // Armazena o valor da média e calcula
alert(`O valor da média das notas é ${media.toFixed(2)}`); // Exibe um alerta na tela