//Entrada do peso e altura
var nome = prompt("Digite seu nome: ");
var peso = parseFloat(prompt("Digite o seu peso em KG: "));
var altura = parseFloat(prompt("Digite a sua altura em metros: "));
//Calculo do IMC
var imc = peso / (altura * altura);
//Determina a mensagem com base no IMC
var mensagem;
if (imc < 18.5){
  mensagem = "Você está abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9){
  mensagem = "Você está com o peso normal (faixa saúdável)";
} else if (imc >= 25 && imc <= 29.9){
  mensagem = "Você está com sobrepeso";
} else {
  mensagem = "Você está com obesidade";
}

//Imprime a mensagem
document.write("Olá " + nome + "!" + "<br>");
document.write("Seu IMC é: " + imc.toFixed(2) + "<br>");
document.write(mensagem);



