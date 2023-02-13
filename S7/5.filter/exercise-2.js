const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

function numPares (num) {
    return (num % 2 === 0 ? num : "")
 }
 
 const agesPares = ages.filter(numPares)
 
 console.log(agesPares)