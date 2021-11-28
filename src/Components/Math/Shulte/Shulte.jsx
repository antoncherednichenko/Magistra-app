import { useState } from 'react'
import s from './Shulte.module.css'
import getShulteMatrix from './getShulteMatrix'

export default function Shulte() {
    const [matrix, setMatrix] = useState(getShulteMatrix(1))
    console.log(matrix)
    return (
        <div className={s.wrapper}>
            {matrix.flatMap(row => (
                row.map((el, index)=>(
                    <p 
                    className={s.item} 
                    key={index}
                    >{el}</p> 
                ))
            ))}
        </div>
    )
}