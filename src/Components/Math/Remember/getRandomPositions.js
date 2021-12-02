export default function getRandomPositions(size) {
    const positions = []
    for (let i = 0; i < size; i++) {
        const pos = []
        pos.push(randomInteger(0, size - 1))
        pos.push(randomInteger(0, size - 1))
        positions.push(pos)
    }
    return positions
}


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }