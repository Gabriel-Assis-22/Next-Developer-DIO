
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`O numero ${i} é par`)
    }
}

let x = 0;
while (x <= 10) {
    console.log(`${x} x 5 =`, x * 5)
    x++
}

const valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
valor.forEach((value) => {
    console.log(`${valor} x 5 = `, valor*5)
});
