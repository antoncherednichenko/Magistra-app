import GameHeader from "./GameHeader.jsx/GameHeader";
import s from './game.module.css'
import { connect } from 'react-redux'
import GameCard from './GameCard/GameCard'
import Maze from '../Math/Maze/Maze'

function Game({gameSettings}) {

    return (
        <>
            <GameHeader />
            <div className={s.container}>
                <GameCard>
                3333
                    {/* <Maze /> */}
                </GameCard>
                <GameCard>
                3333
                    {/* <Maze /> */}
                </GameCard>
                <GameCard>
                3333
                    {/* <Maze /> */}
                </GameCard>
            </div>
            
        </>
    )
}

const mapStateToProps= state => ({
    gameSettings: state.gameSettings
})

export default connect(mapStateToProps)(Game)