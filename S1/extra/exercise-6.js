const goodProducts = [];
const badProducts = [];
const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

// for (let i = 0; i < products.length; i++){
//     products[i].sellCount > 20 ? goodProducts.push(products[i].name):
//     badProducts.push(products[i].name)
// }

for (const roduct of products) {
    product.sellCount > 20 ? goodProducts.push(product.name):
    badProducts.push(product.name)
}

console.log(goodProducts)
console.log(badProducts)