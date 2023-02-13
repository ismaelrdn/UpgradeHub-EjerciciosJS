const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


for (const app of apps) {
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    document.body.appendChild(ul)
    document.body.appendChild(li)
    li.innerHTML = app
    console.log(ul)
}