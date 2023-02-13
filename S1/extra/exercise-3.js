const movies = [
{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
{name: "Origen", durationInMinutes: 165}, 
{name: "El señor de los anillos", durationInMinutes: 967}, 
{name: "Solo en casa", durationInMinutes: 214}, 
{name: "El jardin de las palabras", durationInMinutes: 40}]

let moviesPequeña = []
let moviesMedia = []
let moviesGrande = []

// for (let i = 0; i < movies.length; i++) {
//     movies[i].durationInMinutes < 100 ? moviesPequeña.push(movies[i].name) :
//     movies[i].durationInMinutes > 200 ? moviesGrande.push(movies[i].name) :
//     moviesMedia.push(movies[i].name)
// }

for (const movie of movies) {
    movie.durationInMinutes < 100 ? moviesPequeña.push(movie.name) :
    movie.durationInMinutes > 200 ? moviesGrande.push(movie.name) :
    moviesMedia.push(movie.name)
}

console.log(moviesPequeña)
console.log(moviesMedia)
console.log(moviesGrande)