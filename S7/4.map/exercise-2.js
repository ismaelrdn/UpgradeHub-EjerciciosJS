const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}]

function nombre (array) {
    if (array.name[0] !== "a" && array.name[0] !== "A") {
        return array.name
    } else {
        return array.name = "Anacleto"
    }
}

const usersName = users.map(nombre)

console.log(usersName)