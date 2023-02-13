const pToRemove = document.getElementsByClassName("fn-remove-me")

for (let i = 0; i < pToRemove.length; i++) {
    pToRemove[i].remove()
    i--
}

console.log(pToRemove)