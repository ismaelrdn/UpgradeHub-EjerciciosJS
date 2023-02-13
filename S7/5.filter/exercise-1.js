const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

function mas18 (age) {
   return (age > 18 ? age : "")
}

const agesMas18 = ages.filter(mas18)

console.log(agesMas18)