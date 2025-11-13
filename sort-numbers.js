let drawnNumber = Math.floor(Math.random() * 10);
let chosenNumber = Number(prompt("Choose a number between 0 and 9:"));

if(chosenNumber === drawnNumber) {
    alert(`Você acertou! O número sorteado foi ${drawnNumber}`);
} else {
    alert(`Você errou! O número sorteado foi ${drawnNumber}`);
}