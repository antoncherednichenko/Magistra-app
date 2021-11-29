import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import getSolve from './getSolve'
import {useLocation } from "react-router-dom"
import s from './Solve.module.css'

function Solve({gameSettings}) {
    const [complexity, setComplexity] = useState(gameSettings.complexity)
    const [solve, setSolve] = useState(getSolve(complexity))
    const history = useLocation()
    
    console.log(history)
    return (
        <div>
            {solve.solve.map((el, index) => (
                <span key={index}>{el}</span>
            ))}
            <button onClick={()=>(
                setSolve(getSolve(complexity))
            )} type='button'>update</button>
        </div>
    )
}

const mapStateToProps = state => ({
    gameSettings: state.gameSettings
})
export default connect(mapStateToProps)(Solve)