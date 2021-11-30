import { useEffect, useState } from "react"
import s from './maze.module.css'
import createMaze from "./createMaze"
import { connect } from "react-redux"

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

function Maze({componentComplexity}) {
    const complexityObj = {
        'Легко': 25,
        'Средне': 35,
        'Сложно': 45,
    }
    const [matrix, setMatrix] = useState([])
    const [value, setValue] = useState(complexityObj[componentComplexity])
    const degArr = [0, 90, 180, 270]
    useEffect(() => {
        matrix.splice()
        setMatrix(createMaze(value))
    }, [value])
    useEffect(() => setValue(complexityObj[componentComplexity]), [componentComplexity])
    return (
        <>
            <div
            style={{
                transform:`rotate(${degArr[randomInteger(0, degArr.length - 1)]}deg)`,
                gridTemplateRows: `repeat(${value}, minmax(0, 1fr))`,
                gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`
            }}
            className={s.area}>
                {matrix.flatMap((row) => row.map((cell, index) => {
                    if (cell === 'start') {
                        return <div key={Math.random()} className={s.start}></div>
                    } else if (cell === 'finish') {
                        return <div key={Math.random()} className={s.finish}></div>
                    } else if (cell) {
                        return <div key={Math.random()} className={s.free}></div>
                    } else {
                        return <div key={Math.random()} className={s.cell}></div>
                    }
                }))}
            </div>
        </>
    )
}                   

export default Maze
