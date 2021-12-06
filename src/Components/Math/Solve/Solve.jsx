import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import getSolve from './getSolve'
import s from './Solve.module.css'

function Solve({ componentComplexity, gameID }) {
    const complexityObj = {
        'Легко': 1,
        'Средне': 2,
        'Сложно': 3
    }
    const [solve, setSolve] = useState(getSolve(complexityObj[componentComplexity]))
    const [value, setValue] = useState(0)
    const [count, setCount] = useState(0)
    const [correct, setCorrect] = useState('default')
    const checkAnswer = (e) => {
        if (+value === solve.answer) {
            setCorrect('correct')
            setCount(count + 1)
            setTimeout(() =>{
                setCorrect('default')
                setSolve(getSolve(complexityObj[componentComplexity]))
            }, 800)
        } else {
            setCorrect('uncorrect')
            setTimeout(() =>{
                setCorrect('default')
                setSolve(getSolve(complexityObj[componentComplexity]))
                setValue()
            }, 800)
        }

    }
    useEffect(() => setSolve(getSolve(complexityObj[componentComplexity])), [
        gameID,
        componentComplexity
    ])
    
    return (
        <div className={s.container}>
            <div className={s.counter}>Счет: {count}</div>
            <div className={s.wrapper}>
                {solve.solve.map((el, index) => (
                    <span key={index}>{el}</span>
                ))}
            </div>
            <input
            placeholder='Ответ' 
            className={s.number} 
            onChange={(e)=>setValue(e.target.value)} 
            type='number'/>
            <button
            className={`
                ${s.check}
                ${correct === 'correct' ? s.green : ''}
                ${correct === 'uncorrect' ? s.red : ''}
            `} 
            onClick={checkAnswer} type='button'>Проверить</button>
        </div>
    )
}

const mapStateToProps = state => ({
    gameSettings: state.gameSettings
})
export default connect(mapStateToProps)(Solve)