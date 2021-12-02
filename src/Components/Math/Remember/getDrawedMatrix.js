import getRandomPositions from "./getRandomPositions";

export default function getDrawedMatrix(matrix, size) {
    const positions = getRandomPositions(size + 1)

    positions.forEach((pos, i) => (
        matrix[pos[0]][pos[1]] = true
    ))

    return matrix
}