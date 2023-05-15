// lesson 20
let age: number = -10;

if (age) {
    console.log("You can watch JAV")
} else {
    console.log("You can watch cartoon")
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

// lesson 23
let counter: number = 0;

while (counter < 5) {
    console.log(counter);
    if (counter % 2 === 0) break;
    counter++;
}