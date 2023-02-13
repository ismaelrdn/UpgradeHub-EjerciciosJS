const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]





// -> Método limitado pero resuelve el problema:

// const categorias = [];

// for (const movie of movies){
//     categorias.includes(movie.categories[0]) == "" ? categorias.push(movie.categories[0]) :
//     categorias.includes(movie.categories[1]) == "" ? categorias.push(movie.categories[1]) :
//     categorias.includes(movie.categories[2]) == "" ? categorias.push(movie.categories[2]) :
//     ""
// }

// console.log(categorias)

// -> Alternativa mejor

const categorias = [];

for (const movie of movies) {
    const preCateg = movie.categories;
    for (const categ of preCateg) {
        categorias.includes(categ) ? "" : categorias.push(categ)
    }
}

console.log(categorias)



