class UniqueArray {
    constructor() {
        this.uniqueArray = []
        this.uniqueLength = 0
        this.added = {}
    }

    add(item) {
        if (this.exists()) {
            console.log(`${item} exists already`)
        }
        else {
            this.uniqueArray[this.uniqueLength] = item
            this.uniqueLength++
            this.added[item] = true
        }
    }

    showAll() {
        console.log(this.uniqueArray)
    }

    exists(item) {
        return this.added[item] ? true : false
    }

    get(index) {

        if (index > this.uniqueLength) {
            return -1
        }
        else return this.uniqueArray[index]
    }

}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
console.log(uniqueStuff.added)
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.added)
console.log(uniqueStuff.uniqueLength)
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff)
console.log(uniqueStuff.get(2)) //prints "hydrogen"