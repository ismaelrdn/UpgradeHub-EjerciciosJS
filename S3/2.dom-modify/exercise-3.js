
const div = document.createElement("div")
document.body.appendChild(div)

// for (let i = 0; i <6; i++) {
//     const parrafo = document.createElement("p")
//     parrafo.id = `Párrafo ${i}`
//     div.appendChild(parrafo)
// }

for (let i = 0; i < 6; i++) {
    div.innerHTML += `<p>Párrafo ${i}</p>`
}

