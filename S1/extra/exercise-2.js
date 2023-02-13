const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];

const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false}, 
    {name: "Tofu", isVegan: true},
    {name: "Burger", isVegan: false}, 
    {name: "Rice", isVegan: true}, 
    {name: "Pasta", isVegan: true}];



// x = 0
// for (i = 0; i < foodSchedule.length; i++){
//     foodSchedule[i].isVegan === false ? (foodSchedule[i].name = fruits[x], foodSchedule[i].isVegan = true, x++) : ""
// }

// console.log(foodSchedule)

x = 0
for (const food of foodSchedule){
    food.isVegan === false ? (food.name = fruits[x], food.isVegan = true, x++) : ""
}

console.log(foodSchedule)
