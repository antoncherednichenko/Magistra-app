import { useEffect, useState } from "react"
import s from './maze.module.css'

export default function Maze({windows, complexity}) {

    const [matrix, setMatrix] = useState(null)
    useEffect(() => {
        const initArr = []
            for (let i = 0; i <= 10; i++) {
                const arr = []
                for (let j = 0; j <= 10; j++) {
                    arr.push(false)
                }
                initArr.push(arr)
            }
        setMatrix(initArr)
    }, [])
    console.log(matrix)
    return (
        <>
            <div className={s.area}>
                {matrix.flatMap((row) => row.map(cell => <div className={s.cell}></div>))}
            </div>
        </>
    )
}