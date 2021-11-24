import { useEffect, useState } from "react"
import s from './maze.module.css'
import createMaze from "./createMaze"

export default function Maze({windows, complexity}) {
    const [matrix, setMatrix] = useState([])

    useEffect(() => setMatrix(createMaze(55)), [])

    return (
        <>
            <div className={s.area}>
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


