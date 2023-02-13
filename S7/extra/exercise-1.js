
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

function rpg (game) {
    return (game.genders.includes("RPG") ? game : "")
}

const gamesRpg = videogames.filter(rpg)

let sumaScore = 0;
for (const game of gamesRpg) {
    sumaScore += game.score
}

console.log(sumaScore/gamesRpg.length)