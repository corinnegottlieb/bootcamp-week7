class Stack {
    constructor() {
        this.stackArray = []
        this.stackLength = 0

    }

    push(x) {
        this.stackArray[this.stackLength] = x
        this.stackLength++
    }

    isEmpty() {
        return this.stackLength === 0 ? true : false
    }

    peek() {
        return this.isEmpty() ? null : this.stackArray[this.stackLength - 1]
    }

    pop() {
        if (this.isEmpty()) {
            return null
        }
        this.stackLength--
        console.log(this.stackLength)
        return delete this.stackArray[this.stackLength]
    }

    print() {
        console.log(this.stackArray)
    }
}

// let myStack = new Stack()
// console.log(myStack.isEmpty())    //true
// myStack.print()                    //[]
// myStack.push(2)      
// console.log(myStack.isEmpty())     //false
// myStack.push(4)      
// myStack.print()                    //[2,4]
// console.log(myStack.peek())        //4
// myStack.pop()
// myStack.print() 
// myStack.pop()
// myStack.print() 
// console.log(myStack.peek())       //null
// console.log(myStack.isEmpty())    //true

// EXERCISE 1

class Queue {
    constructor(){
        this.queue=[]
        this.length = 0
    }
enqueue(x){
    this.queue[this.length] = x
    this.length++
}
isEmpty(){
    return this.length === 0
}
peek(){
    return this.isEmpty() ? null : this.queue[0]
}
dequeue(){
    this.length--
    return delete this.queue[0]
}
print(){
    console.log(this.queue)
}
}

// let q = new Queue()
// console.log(q.isEmpty())    //true
// q.print()                   //[]
// q.enqueue(2)
// console.log(q.isEmpty())    //false
// q.enqueue(4)
// q.print()                   //[4,2]
// console.log(q.peek())       //2
// q.dequeue()
// q.dequeue()
// console.log(q.peek())       //null
// console.log(q.isEmpty())    //true

// EXERCISE 2

// class MinStack extends Stack {
//     constructor() {
//         super()
//         this.min = []
//         this.minLength = 0

//     }
//     push(x) {
//         if (this.minLength === 0){
//             this.min[0] = x
//             this.minLength++
//         }
//         else if(x < this.min[this.minLength-1]){
//             this.min[this.minLength]= x
//             this.minLength++
//         }

//         super.push(x)
//     }

//     pop() {
//         if (this.min[this.minLength-1] === this.stackArray[this.stackLength-1]){
//             this.minLength--
//             console.log(this.min[this.minLength])
//             delete this.min[this.minLength]

//         }
//         console.log(this.min[this.minLength])
//         super.pop()

//     }

//     getMin() {
//         return this.isEmpty() ? null : this.min[this.minLength-1]
//     }

// }

// let ms = new MinStack()
// ms.push(17)
// ms.push(12)
// ms.push(31)
// console.log(ms.getMin())    //12
// ms.pop()
// ms.pop()
// ms.pop()
// console.log(ms.getMin())    //null
// ms.push(19)
// ms.push(21)
// console.log(ms.getMin())    //19
// ms.push(3)
// console.log(ms.getMin())    //3
// ms.pop()
// ms.pop()
// console.log(ms.getMin())    //19

// EXERCISE 3

class DuoQueue {
    constructor() {
        this.queue = {
            1: [],
            2: []
        }
        this.length = {
            1: 0,
            2: 0
        }
    }
    enqueue(person, qNum) {
        this.queue[qNum][this.length[qNum]] = person
        this.length[qNum]++
    }
    isEmpty(qNum) {
        return this.length[qNum]=== 0
    }
    peek(qNum) {
        return this.isEmpty(qNum) ? null : this.queue[qNum][0]
    }
    dequeue(qNum) {
        this.length[qNum]--
        return delete this.queue[qNum][0]
    }
    print() {
        console.log(this.queue)
    }
    getLongestQueue(){
        if(this.length[1]>this.length[2]){
            return this.queue[1]}
            else if(this.length[1]<this.length[2]){
                return  this.que
            })
    
            
        }
    }
}