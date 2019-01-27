generateMatrix = (numRows, numColumns) => {
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

let matrix = generateMatrix(3, 4)
// matrix.forEach(r=>r.forEach(c=>console.log(c)))

get = (rowNum, colNum) => {
    console.log(matrix[rowNum][colNum])
}

// get(1,2)

// print = (matrix) => {
//     for(let i=0; i <matrix.length; i++){
//         let line = ""
//         for(let j=0; j<matrix[i].length; j++){
//             line+= (matrix[i][j]+"\t")
//         }
//         console.log(line)
// }}

print = (matrix) => matrix.forEach(r=>{
    let row = ""
    r.forEach(c=>{
        row += c+"\t"
    })
    console.log(row)
})

// print(matrix)

// function printRow(matrix, rowNum) {
//     for(let i = 0; i < matrix[rowNum].length; i++){
//         console.log(matrix[rowNum][i])
//     }
// }

printRow=(matrix, rowNum)=>{
    matrix[rowNum].forEach(c=>console.log(c))
}

// printRow(matrix, 1)

printColumn = (matrix, colNum) => {
    console.log(matrix)
    matrix.forEach(r=>
        console.log(r[colNum])
    )
}

// printColumn(matrix,1)

alter = (rowNum, colNum, value) =>{
   matrix[rowNum][colNum]= value 
   print(matrix)
}

// alter(1, 3, 174)