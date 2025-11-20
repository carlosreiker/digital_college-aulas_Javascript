let altura = Number(prompt("Digite sua altura. Ex: 1.80"));
let peso = Number(prompt("Digite seu peso. Ex: 70.50"));

let imc = peso / (altura ** 2);

if (imc < 16) {
  alert(`Seu IMC é ${imc}, você está com Magreza grau III. Só pele e osso`)
} else if (imc >= 16 && imc <= 16.9) {
  // alert(`Seu IMC é ${imc}, você está com Magreza grau II. Precisa de mais feijão`);
  console.log(`Seu IMC é ${imc}, você está com Magreza grau II. Precisa de mais feijão`);
} else if (imc >= 17 && imc <= 18.4) {
  // alert(`Seu IMC é ${imc}, você está com Magreza grau I. Bora comer mais um pouco`);
  console.log(`Seu IMC é ${imc}, você está com Magreza grau I. Bora comer mais um pouco`);
} else if (imc >= 18.5 && imc <= 14.9) {
  // alert(`Seu IMC é ${imc}, você está com Eutrofia. Você está só o filé`);
  console.log(`Seu IMC é ${imc}, você está com Eutrofia. Você está só o filé`);
} else if (imc >= 25 && imc <= 29.9) {
  // alert(`Seu IMC é ${imc}, você está com Pré-Obesidade. Abre o olho`);
  console.log(`Seu IMC é ${imc}, você está com Pré-Obesidade. Abre o olho`);
} else if (imc >= 30 && imc <= 34.9) {
  // alert(`Seu IMC é ${imc}, você está com Obesidade moderada (grau I). Melhor ir na academia de vez em quando.`);
  console.log(`Seu IMC é ${imc}, você está com Obesidade moderada (grau I). Melhor ir na academia de vez em quando.`);
} else if (imc >= 35 && imc <= 39.9) {
  // alert(`Seu IMC é ${imc}, você está com Obesidade severa (grau II). Cuidado mah`);
  console.log(`Seu IMC é ${imc}, você está com Obesidade severa (grau II). Cuidado mah`);
} else {
  // alert(`Seu IMC é ${imc}, você está com Obesidade muito severa (grau III). Bora se mexer`);
  console.log(`Seu IMC é ${imc}, você está com Obesidade muito severa (grau III). Bora se mexer`);
}

