
// lesson 30 default params, can declare like z = 0 or z:number = 0
const sum6 = (x: number, y: number, z = 0): number => x + y + z


console.log(sum6(5, 3))
console.log(sum6(1, 2, 3))

// lesson 29 optional params
const sum5 = (x: number, y: number, z?: number): number => {
    if (z)
        return x + y + z;
    return x + y;
}

console.log(sum5(1, 2))

// lesson 28 function types
const sum2 = (a: number, b: number): number => a + b


// lesson 27 function
function sum(a: number, b: number): number {
    console.log("check")
    return a + b
}

// anonymous function
const getSum = (a: number, b: number): number => a + b

console.log(sum(6, 9))
console.log(getSum(3, 5))

// lesson 26 continue
for (let index = 0; index < 9; index++) {
    if (index % 2) {
        continue; //the below code will be skipped
    }
    console.log(index)
}

// lesson 25 break

let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 },
]

for (let i = 0; i < products.length; i++) {
    if (products[i].price == 900) {
        break;
    }
    console.log(products[i]);
}

// lesson 24
let counter2: number = 0;

do {
    console.log(counter2);
    if (counter2 % 2 === 0) break;
    counter2++;
} while (counter2 < 5)

// lesson 23
let counter: number = 0;

while (counter < 5) {
    console.log(counter);
    if (counter % 2 === 0) break;
    counter++;
}

// lesson 22

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let j: number = 0

for (; j < 10; j++) {
    console.log(j);
}

for (let i = 0; ; i++) {
    if (i > 9) break;
    console.log(i);
}

let k: number = 0

for (; ;) {
    if (k > 9) break;
    console.log(k);
    k++;
}

// lesson 21
const day: number = new Date().getDay()

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Saturday");
        break;
}

// lesson 20
let age: number = -10;

if (age) {
    console.log("You can watch JAV")
} else {
    console.log("You can watch cartoon")
}
