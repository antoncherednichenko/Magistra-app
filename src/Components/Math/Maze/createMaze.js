
export default function createMaze(size) {
    const eraser = {x: 0, y: 0};
    const maze = createMatrix(size)
    maze[eraser.x][eraser.y] = true
    
    for (let i = 0 ; i < 50000; i++) {
        moveEraser(size, maze, eraser)
    }
    maze[0][0] = 'start'
    maze[size-1][size-1] = 'finish'

    return maze
}

function moveEraser(size, maze, eraser) {
    const directions = getDirections(eraser, size)
    const [dx, dy] = getRandomWay(directions)
    
    eraser.x += dx
    eraser.y += dy
    if (!maze[eraser.x][eraser.y]) {
        maze[eraser.x][eraser.y] = true
        maze[eraser.x - dx / 2][eraser.y - dy / 2] = true
    }

   
}

function createMatrix (size) {
    const maze = []

    for (let i = 0; i < size; i++) {
        const arr = []
        for (let j = 0; j < size; j++) {
            arr.push(false)
        }
        maze.push(arr)
    }

    return maze
}

function getDirections(eraser, size){
    const {x, y} = eraser
    const directions = []

    if (x > 0) {
        directions.push([-2, 0])
    }
    if (x < size - 1) {
        directions.push([2,0])
    }
    if (y > 0) {
        directions.push([0, -2])
    }
    if (y < size - 1) {
        directions.push([0, 2])
    }

    return directions 
}

function getRandomWay(directions) {
    const index = randomInteger(0, directions.length)
    return directions[index]
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }