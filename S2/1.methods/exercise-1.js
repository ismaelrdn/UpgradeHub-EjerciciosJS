const products = [
    'Camiseta de Pokemon', 
    'Pantalón coquinero', 
    'Gorra de gansta', 
    'Camiseta de Basket', 
    'Cinrurón de Orión', 
    'AC/DC Camiseta']

// for (product of products){
//     product.includes("Camiseta") ? console.log(product) : ""
// }

for (let i = 0; i < products.length; i++){
    products[i].includes("Camiseta") ? console.log(products[i]) : ""
}

for (const product of products){
    product.includes("Camiseta") ? console.log(product) : ""
}