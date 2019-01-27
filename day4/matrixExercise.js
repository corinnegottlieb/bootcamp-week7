class Matrix {
    constructor(numRows, numColumns) {
        this.numRows = numRows
        this.numColumns = numColumns
        this.matrix = this.generateMatrix(numRows, numColumns)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1

        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    print() {
        this.matrix.forEach(r => {
            let row = ""
            r.forEach(c => {
                row += c + "\t"
            })
            console.log(row)
        })
    }

    printRow(rowNum) {
        this.matrix[rowNum].forEach(c => console.log(c))
    }

    printColumn(colNum) {
        this.matrix.forEach(r => console.log(r[colNum]))
    }

    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    alter(rowNum, colNum, value) {
        this.matrix[rowNum][colNum] = value
        this.print()
    }

    findCoordinate(value) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === value) {
                    return { x: j, y: i }
                }
            }
        }
    }


}

// let m = new Matrix(3, 4)
// m.print()
// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

// let m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

class EmployeeMatrix extends Matrix {
    constructor() {
        super()

    }
    loadData(salaryData) {
        this.matrix = salaryData.map(d => Object.values(d))
    }

    getEmployees(department) {
        return this.matrix.filter(d => d.includes(department)).map(d => d[1])
    }

    getTotalSalary(department) {
        this.salaries = 0
        this.matrix.forEach(d => {
            if (d.includes(department)) {
                this.salaries += d[3]
            }
        })
        return this.salaries
    }

    findRichest() {
        this.richest = 0
        this.name
        this.matrix.forEach(r => {
            if (r[3] > this.richest) {
                this.richest = r[3]
                this.name = r[1]
            }
        })
        return this.name
    }


}

let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

// m.loadData(data)
// m.print()

// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

// console.log(m.getTotalSalary("Finance")) //prints 4300
// console.log(m.getTotalSalary("Design")) //prints 5300
// console.log(m.findRichest()) //prints Anisha


// EXERCISE 7

class TicTacToe extends Matrix {
    constructor() {
        super()
        this.matrix = this.loadBoard()
    }

    loadBoard() {
        this.matrix = []

        for (let r = 0; r < 3; r++) {
            this.matrix.push([])
            for (let c = 0; c < 3; c++) {
                this.matrix[r].push(`.`)
            }
        }
        return this.matrix
    }

    play(rowNum, columnNum, player) {

        if (player === 1) {
            this.matrix[rowNum][columnNum] = `x`
            this.checkWin(rowNum, columnNum, player)
        }
        else this.matrix[rowNum][columnNum] = `o`
        this.checkWin(rowNum, columnNum, player)
    }

    checkWin(rowNum, colNum, player) {
        if (
            this.matrix[rowNum][0] === this.matrix[rowNum][1] && this.matrix[rowNum][1] === this.matrix[rowNum][2] ||
            this.matrix[0][colNum] === this.matrix[1][colNum] && this.matrix[1][colNum] === this.matrix[2][colNum] ||
            this.matrix[0][1] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2] ||
            this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2, 0])
            return console.log(`Congratulations Player ${player}`)
    }


}

// let board = new TicTacToe()
// board.loadBoard()
// // board.print()


// board.play(2, 2, 1)
// board.play(0, 0, 2)
// board.print()
let board = new TicTacToe()
board.loadBoard()

board.play(2, 2, 1)
board.play(0, 0, 0)
board.play(0, 2, 1)
board.play(1, 0, 0)
board.play(1, 2, 1) //prints Congratulations Player 1

board.print()
