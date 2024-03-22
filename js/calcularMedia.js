let notaFinal = parseFloat(prompt("Digite a nota final do aluno: "));

// Check if the input is a valid number
if (!isNaN(notaFinal)) {
  // Assign the parsed value to the global variable
  notaFinal = parseFloat(notaFinal.toString());

  // Call the function with the updated value
  calcularMedia(notaFinal);
} else {
  alert("Digite apenas números.");
}

// Function that calculates the media
function calcularMedia(notaFinal) {
  if (notaFinal >= 6) {
    alert(`A nota final é ${notaFinal} e o aluno está aprovado.`);
  } else {
    alert(`A nota final é ${notaFinal} e o aluno está reprovado.`);
  }
}