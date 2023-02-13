const btnToClick = document.createElement("button")
document.body.appendChild(btnToClick)

btnToClick.setAttribute("id", "btnToClick")

btnToClick.addEventListener("click", (event) => {
    console.log(event)
})