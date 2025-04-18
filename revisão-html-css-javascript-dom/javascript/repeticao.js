
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`O numero ${i} é par`)
    }
}

console.log("==========================================================")

let x = 0;
while (x <= 10) {
    console.log(`${x} x 5 =`, x * 5)
    x++
}

console.log("==========================================================")

const valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
valor.forEach((value) => {
    console.log(`${value} x 5 = `, value*5)
});


console.log("==========================================================")

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = valores.map((value)=>{
    return value * 5;
});
console.log(resultado)