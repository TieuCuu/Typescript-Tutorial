let role: string[] = ["Admin", "Owner", "Customer"]
let rank: number[] = [1, 2, 4]
// rank.push("test") error

//mix type
let mix: (string | number | null | boolean)[] = ["Banana", 3, null, true]
let mix1 = ["XiaoJiu", 123, false]

console.log(role, rank, mix)