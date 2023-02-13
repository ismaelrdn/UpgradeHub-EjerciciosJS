function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
            break
        }
    }
}



const arrayPrueba = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']


function removeItem (array, text) {
    const newArray = array
    newArray.splice(findArrayIndex(array, text), 1)
    return newArray
    }

console.log(removeItem(arrayPrueba, "Mosquito"))