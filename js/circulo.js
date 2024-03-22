let diametro = parseFloat(prompt("Digite o Diâmetro do Circulo: "));
let raio = diametro / 2;
let areaCirculo = 3.141592 * Math.pow(raio, 2);

if(!isNaN(areaCirculo)){
    alert(`O valor da Área do Circulo é: ${areaCirculo.toFixed(2)} cm`);
} else {
    alert("Digite apenas NÚMEROS: ")
}
