function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const result = document.getElementById("result");
    const DiceImg = document.getElementById("DiceImg");
    const diceRolls = [];
    const diceImages = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        diceRolls.push(value);
        diceImages.push(`<img src="img/${value}.png">`);
    }

    
    result.textContent = `You rolled: ${diceRolls.join(", ")}`;
    DiceImg.innerHTML = diceImages.join(" ");

}