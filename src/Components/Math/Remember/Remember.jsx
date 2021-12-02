import { useEffect, useRef, useState } from 'react'
import getDrawedMatrix from './getDrawedMatrix'
import getMatrix from './getMatrix'
import getRandomPositions from './getRandomPositions'
import s from './Remember.module.css'


export default function Remember({componentComplexity, gameID}) {
    const complexityObj = {
        'Легко': 3,
        'Средне': 4,
        'Сложно': 5,
    }
    const [matrix, setMatrix] = useState([])
    const [value, setValue] = useState(complexityObj[componentComplexity])
    const memory = useRef(getDrawedMatrix(getMatrix(value), value))
    const tryCheck = (e) => {
        e.currentTarget.style.backgroundColor = '#8DDE8C'
    }
    const handleStart = () => {
        setMatrix(memory.current)
        setTimeout(() => {
            setMatrix(getMatrix(value))
        }, 1500)
    }
    const handleCheck = () => {
        setMatrix(memory.current)
        setTimeout(() => {
            setMatrix(getMatrix(value))
            memory.current = getDrawedMatrix(getMatrix(value), value)
            setMatrix(getMatrix(value))
            setTimeout(() => {
                setMatrix(memory.current)
                setTimeout(() => {
                    setMatrix(getMatrix(value))
                }, 1500)
            }, 700);
        }, 2000);
    }
    useEffect(() => {
        setMatrix(getMatrix(value))
        memory.current = getDrawedMatrix(getMatrix(value), value)
    }, [value, gameID])
    useEffect(() => setValue(complexityObj[componentComplexity]), [componentComplexity])
    return (
        <>
        <div 
        style={{
            gridTemplateRows: `repeat(${value + 1}, minmax(0, 1fr))`,
            gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`
        }}
        className={s.container}>
            {matrix.flatMap(row => row.map((cell, index) => {
               return <div onClick={(e) =>  tryCheck(e)} key={index + Math.random()} className={`${cell ? s.memory : s.cell}`}></div>
            }))}
            <div
            className={s.buttons}>
                <button onClick={handleStart} className={s.btn} type='button'>Начать</button>
                <button onClick={handleCheck} className={s.btn} type='button'>Проверить</button>
            </div>
        </div>
            
        </>
    )
}