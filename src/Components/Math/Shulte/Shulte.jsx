import { useEffect, useState } from 'react'
import s from './Shulte.module.css'
import getShulteMatrix from './getShulteMatrix'

export default function Shulte({componentComplexity, gameID}) {
    const complexityObj = {
        'Легко': 1,
        'Средне': 2,
        'Сложно': 3,
    }
    const [value, setValue] = useState(complexityObj[componentComplexity])
    const [matrix, setMatrix] = useState(getShulteMatrix(complexityObj[componentComplexity]))
    useEffect(() => {
        matrix.splice()
        setMatrix(getShulteMatrix(value))
    }, [value, gameID])
    useEffect(() => setValue(complexityObj[componentComplexity]),[componentComplexity])
    console.log(matrix.length)
    return (
        <div
        style ={{
            gridTemplateRows: `repeat(${matrix.length}, 1fr)`,
            gridTemplateColumns: `repeat(${matrix.length}, 1fr)`
        }} 
        className={s.wrapper}>
            {matrix.flatMap(row => (
                row.map((el, index)=>(
                    <p 
                    className={s.item} 
                    key={Math.random()}
                    >{el}</p> 
                ))
            ))}
        </div>
    )
}