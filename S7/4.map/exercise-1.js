const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}]

function nombre (array) {
    return array.name
}

const usersName = users.map(nombre)

console.log(usersName)