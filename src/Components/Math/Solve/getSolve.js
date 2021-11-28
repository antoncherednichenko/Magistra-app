
export default function getSolve(complexity) {
    let min = 0
    let max = 5
    let simbols = ['+', '-']
    const res = {
        solve: [],
        answer: ''
    }
    const index = getIndex()
    if (complexity === 2) {
        max = 10
        simbols.push('*')
    }
    if (complexity === 3) {
        max = 100
    }
    const first = randomInteger(min, max)
    const second = randomInteger(min, max)
    const simbol = simbols[randomInteger(0, simbols.length)]
    const answer = eval(`${first}${simbol}${second}`)
    res.solve.push(first)
    res.solve.push(simbol)
    res.solve.push(second)
    res.solve.push('=')
    res.solve.push(answer)
    res.answer = res.solve[index]
    res.solve.splice(index, 1, '?')
    if (answer < 0) {
       return getSolve(complexity)
    }
    return res
}

function getIndex(){
    const arr = [0, 2, 4]
    return arr[randomInteger(0, arr.length)]
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }