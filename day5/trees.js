// class Node {
//     constructor(value){
//         this.value=value;
//         this.leftChild = null;
//         this.rightChild = null ;
//     }
//     insertLeft(value){
//         if(!this.leftChild){
//             this.leftChild = new Node(value)
//         }
//         else {
//             let newNode = new Node(value);
//             newNode.leftChild = this.leftChild;
//             this.leftChild = newNode
//         }
//     }
//     insertRight(value){
//         if(!this.rightChild){
//             this.rightChild = new Node(value)
//         }
//         else {
//             let newNode = new Node(value)
//             newNode.rightChild = this.rightChild;
//             this.rightChild = newNode
//         }
//     }
// }

// const H = new Node(`H`)
// H.insertLeft(`E`)
// let E = H.leftChild
// E.insertRight(`G`)
// H.insertRight(`S`)
// let S = H.rightChild
// S.insertLeft(`L`)
// S.insertRight(`Y`)
// let L = S.leftChild
// L.insertLeft(`I`)

// console.log(H)

class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;

    }
    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }

    }
    findNode(val) {
        if (this.value === val) {
            return console.log(true)
        }
        else if (val < this.value && this.leftChild) {
            return this.leftChild.findNode(val)
        }
        else if (val > this.value && this.rightChild) {
            return this.rightChild.findNode(val)
        }
        else { return console.log(false) }

    }
    findCommonParent(a, b) {
        if (a < this.value && b < this.value) {
            return this.leftChild.findCommonParent(a, b)
        }

        else if (a > this.value && b > this.value) {
            return this.rightChild.findCommonParent(a, b)
        }
        else return console.log(this.value)
    }

    findMinimumVal(){
        if(this.leftChild){
            this.leftChild.findMinimumVal()
        }
        else {return this.value}
    }

    deleteNode(val, parent = null) {
        if (val < this.value && this.leftChild) {
            return this.leftChild.deleteNode(val, this)
        }
        else if (val < this.value) {
            return false
        }
        else if (val > this.value && this.rightChild) {
            return this.rightChild.deleteNode(val, this)
        }
        else if (val > this.value) {
            return false
        }
        else {
            if (!this.rightChild && !this.leftChild && this === parent.leftChild) {
                parent.leftChild = null
            }
            else if (!this.rightChild && !this.leftChild && this === parent.rightChild) {
                parent.rightChild = null
            }
            else if(!this.rightChild && this.leftChild && this === parent.leftChild){
                parent.leftChild === this.leftChild
            }
            else if(!this.rightChild && this.leftChild && this === parent.rightChild){
                parent.rightChild === this.leftChild
            }
            else if(this.rightChild && !this.leftChild && this === parent.leftChild){
                parent.leftChild === this.rightChild
            }
            else if(this.rightChild && !this.leftChild && this === parent.rightChild){
                parent.rightChild === this.rightChild
            }
            else{
                this.value = this.rightChild.findMinimumVal()
                this.rightChild.deleteNode(this.value, this)
            }
            return true
        


       
            
        }

    }

    // const H = new BSNode(`H`)
    // H.insertNode(`E`)
    // H.insertNode(`G`)
    // H.insertNode(`S`)
    // H.insertNode(`L`)
    // H.insertNode(`Y`)
    // H.insertNode(`I`)


    // const letters = ["H", "E", "S", "G", "L", "Y", "I"]
    // let bSTree = new BSNode()
    // letters.forEach(l => bSTree.insertNode(l))

    // console.log(bSTree)
    // bSTree.findNode("H") // should print true
    // bSTree.findNode("G") // should print true
    // bSTree.findNode("Z") // should print false
    // bSTree.findNode("F") // should print false
    // bSTree.findNode("y") // should print false - we didn't make the tree case sensitive!

    const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
        let bSTree = new BSNode()
letters.forEach(l => bSTree.insertNode(l))

bSTree.findCommonParent("B", "I") //should return "H"
bSTree.findCommonParent("B", "G") //should return "E"
bSTree.findCommonParent("B", "L") //should return "J"
bSTree.findCommonParent("L", "Y") //should return "R"
bSTree.findCommonParent("E", "H") //should return "J"
