const sum = (a: number, b: number): number => a + b

console.log(sum(3, 4))
// console.log(sum(3, '3')) error

const handleLogs = (msg: string): void => console.log(msg)

handleLogs("hi")
