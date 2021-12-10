import { useEffect, useState } from 'react'
import s from './Game.module.css'
import { connect } from 'react-redux'
import GameCard from './GameCard/GameCard'
import GameHeader from "./GameHeader.jsx/GameHeader";
import store from '../../store/store';

function Game({gameSettings, Game}) {
    const[gameArray, SetGameArray] = useState([])
    const[complexity, setComplexity] = useState(gameSettings.complexity)
    const[windows, setWindows] = useState(gameSettings.windows)
    useEffect(() => {
        for (let i = 0; i < windows; i++) {
            SetGameArray(prev => prev.concat(Game))
        }
    }, [])
    useEffect(() => {
        SetGameArray(prev => prev.splice())
        for (let i = 0; i < windows; i++) {
            SetGameArray(prev => prev.concat(Game))
        }
    }, [windows])
    const template =  `repeat(${windows}, minmax(350px, 1fr))`
    const changeComplexity = value => (
        setComplexity(value)
    )
    const changeWindows = value => (
        setWindows(+value)
    )
   
    return (
        <>
            <GameHeader
                changeWindows = {changeWindows} 
                changeComplexity={changeComplexity}
                complexity={complexity}
                windows={windows}
            />
            <div
            style={{
                gridTemplateColumns:`${template}`
            }} 
            className={s.container}>
              
                    {gameArray.map((game, index) => (
                       <GameCard key={game + index} complexity={complexity}>
                            {<Game />}
                       </GameCard>
                    ))}
                
            </div>
            
        </>
    )
}

const mapStateToProps= state => ({
    gameSettings: state.gameSettings
})

export default connect(mapStateToProps)(Game)