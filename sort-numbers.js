let drawnNumber = Math.floor(Math.random() * 10);
let chosenNumber = Number(prompt("Choose a number between 0 and 9:"));

if(chosenNumber === drawnNumber) {
    console.log(`Você acertou! O número sorteado foi ${drawnNumber}`);
} else {
    console.log(`Você errou! O número sorteado foi ${drawnNumber}`);
}