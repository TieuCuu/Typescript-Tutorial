function addNumberOrString(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b)
    }

    throw new Error('Parameters must be number or string')
}

console.log("check", addNumberOrString(2, 3))
console.log("check", addNumberOrString('Hello', 'World'))
// console.log("check", addNumberOrString(false, 3)) //error
