function swap (array, position1, position2){
    const elemento1 = array[position1]
    const elemento2 = array[position2]
    array[position1] = elemento2
    array[position2] = elemento1
    return array
}

console.log(swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'],1,3))