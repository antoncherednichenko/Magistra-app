import { useEffect, useState } from 'react'
import s from './Game.module.css'
import { connect } from 'react-redux'
import GameCard from './GameCard/GameCard'
import GameHeader from "./GameHeader.jsx/GameHeader";

function Game({gameSettings, game}) {
    return (
        <>
            <GameHeader />
            <div className={s.container}>
                <GameCard>
                    {game}
                </GameCard>
            </div>
            
        </>
    )
}

const mapStateToProps= state => ({
    gameSettings: state.gameSettings
})

export default connect(mapStateToProps)(Game)