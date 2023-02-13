const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

function visitado (city) {
    if (city.isVisited == true) {
        return city.name + " Visited"
    } else {
        return city.name
    }
}

let cityVisited = cities.map(visitado)

console.log(cityVisited)