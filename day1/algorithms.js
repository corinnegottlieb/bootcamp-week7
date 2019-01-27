// let numbers = [823412013513, 1381120136324, 82341381745, 181238377131412, 74128377131412, 74128377412] // should find 74128377412

// let numbers = [-312, -9123, -112, -812, -7411, -312] //should find -9123

// let numbers = [23, 23, 23, 23, 23] //should find 23
// let numbers = []

// let smallestNumber = numbers[0]//our 'number stored in memory'

// for(let num of numbers){ //going over each number

//   if(num < smallestNumber){

//     smallestNumber = num //forget the number stored in memory and store num instead
//   }
// }

// console.log("Smallest number is " + smallestNumber)

// EXERCISE 1

const printStars = (num) => {
let stars =""
let starCount = 0
while (starCount<num){
stars += "*"
starCount++
console.log(stars)
}
}

// printStars(5)

const printBackwardsStars = (num) => {
    let stars =""
    let starCount = 0
    while (starCount<num){
    stars += "*"
    starCount++}
    while (starCount>0){
    stars = stars.slice(1,starCount)
    starCount--
    console.log(stars)}
}

// printBackwardsStars(6)

const printStarSeries =(num, count)=>{
  while(count>0){
    printStars(num)  
  printBackwardsStars(num)
  count--
  }
}

// printStarSeries(3,3)

const reverse = function (str){
    let reversed = ""
    let index = str.length - 1
    while(index>=0){
        reversed += str[index]
        index--
    }
    return reversed
}

const isPalindrome = function(str){
    let reversed = ""
    let index = str.length - 1
    while(index>=0){
        reversed += str[index]
        index--
    }
    if(str === reversed){
        return console.log(true)
    }
    else return console.log(false)
}

// reverse("dog")
// reverse("race car")
// isPalindrome(`tacocat`)

const encrypt = function(str){
    let encrypted = ""
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let index = 0
    let indexC
     while(index<str.length){
       indexC = alphabet.indexOf(str[index]) + 1
        encrypted+=alphabet[indexC]
        index++
    }
    console.log(encrypted)
}

// encrypt(`cat`)

const decrypt = function(str){
    let decrypted = ""
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let index = 0
    let indexD
    while(index<str.length){
        indexD = alphabet.indexOf(str[index]) - 1
         decrypted+=alphabet[indexD]
         index++
     }
     console.log(decrypted)
}

// decrypt(`dbu`)

const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
    let jumbledArr = []
    let count = arr1.length + arr2.length
    while(jumbledArr.length < count){
        let arrayNum = Math.floor((Math.random() * 2) + 1)
        if(arrayNum ===1){
   let word = arr1[Math.floor(Math.random() * arr1.length)]
   if(!jumbledArr.includes(word)){
jumbledArr.push(word)}}
    else{
    let word = arr2[Math.floor(Math.random() * arr2.length)]
    if(!jumbledArr.includes(word)){
    jumbledArr.push(word)}}
    }
    return console.log(jumbledArr)
}
// EXERCISE 9

const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}


const dist = [`A`,`A`,`A`,`A`,`A`,`A`,`B`,`C`,`D`,`D`]
getLetter=()=>{
   let letter =  dist[Math.floor(Math.random() * dist.length)]
    console.log(letter)
}

