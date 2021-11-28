
export default function getShulteMatrix(complexity) {
    let matrixSize = 3
    const matrix = []
    let counter = 0
    if(complexity === 2){
        matrixSize = 5
    }
    if(complexity === 3) {
        matrixSize = 7
    }
    const values = getValues(matrixSize)
    for (let i = 0; i < matrixSize; i++) {
        const arr = []
        for(let j = 0; j < matrixSize; j++) {
            arr.push(values[counter])
            counter++
        }
        matrix.push(arr)
    }
    return matrix
}

function getValues(size) {
    const values = []
    for (let i = 1; i <= size**2; i++) {
        values.push(i)
    }
    return shuffle(values)
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
  }