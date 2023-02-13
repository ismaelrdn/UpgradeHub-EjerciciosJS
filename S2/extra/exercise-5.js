function rollDice (minCaras, maxCaras) {
    return Math.round(Math.random() * (maxCaras - minCaras) + minCaras)
}

console.log(rollDice(1, 6))