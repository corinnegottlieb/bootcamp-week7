// let numbers = [3, 7, 20, 1, 1, 8, 2]

// const sumR = function (numbers, currentSum = 0) {
//     if (numbers.length === 0) { return currentSum }

//     currentSum += numbers.splice(0, 1)[0]
//     return sumR(numbers, currentSum)
// }

// sumR(numbers)
// console.log(currentSum)

// EXERCISE 1

// const factorial = function (number, currentFactorial = 0) {
//     if (number === 1) { return currentFactorial }
//     if (currentFactorial === 0) {
//         currentFactorial = number * (number - 1)
//     }
//     else {
//         currentFactorial = currentFactorial * (number - 1)
//     }
//     // console.log(currentFactorial)
//     number--
//     // console.log(number)
//     return factorial(number, currentFactorial)

// }

// let x = factorial(5)
// console.log(x)


// EXERCISE 2

// const reverse = function (string, i = string.length-1, reversed =``){
//     if (i=== -1) {return reversed}
// reversed = reversed + string[i]
// i--
// // console.log(reversed)
// return reverse(string, i, reversed)
// }

// let x = reverse(`elephant`)
// console.log(x)

// EXERCISE 3

// const arr1 = [1, 2, 3]
// const arr2 = []

// const swap = function (arr1, arr2){
//     if(arr1.length === 0 ){return arr1,arr2}
//     arr2.push(arr1.splice(0,1)[0])
//     return swap(arr1, arr2)
// }

// swap(arr1, arr2)
// console.log(arr1) //[]
// console.log(arr2) //[1, 2, 3]