import { useEffect, useState } from "react"
import s from './maze.module.css'
import createMaze from "./createMaze"
import { connect } from "react-redux"

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

function Maze({complexity}) {
    const[componentComplexity, setComponentComplexity] = useState(complexity)
    const [matrix, setMatrix] = useState([])
    const degArr = [0, 90, 180, 270]
    useEffect(() => setMatrix(createMaze(45)), [])
    
    return (
        <>
            <div
            style={{
                transform:`rotate(${degArr[randomInteger(0, degArr.length - 1)]}deg)`,
                gridTemplateRows: `repeat(${45}, minmax(0, 1fr))`,
                gridTemplateColumns: `repeat(${45}, minmax(0, 1fr))`
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

const mapStateToProps = state => ({
    gameSettings: state.gameSettings
})

export default Maze
