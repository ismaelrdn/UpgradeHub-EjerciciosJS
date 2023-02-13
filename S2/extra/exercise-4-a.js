function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
            break
        }
    }
}


console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], "Salamandra"))