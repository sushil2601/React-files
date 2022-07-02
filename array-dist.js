var numbers = [10,20,30,40,50]

// var v1 = numbers[0]
// var v2 = numbers[1]

var v1 = numbers[2]

console.log(v1)

// array destructuring - es6

const users = ['john','doe','jack','smith','jack']

// const [u1,u2] = users
// console.log(u1,u2)

const[,,,u1] = users
console.log(u1)

const u2 = users[4]
console.log(u2)

