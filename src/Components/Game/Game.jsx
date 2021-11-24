import GameHeader from "./GameHeader.jsx/GameHeader";
import s from './game.module.css'
import { connect } from 'react-redux'

function Game({gameSettings}) {

    return (
        <>
            <GameHeader />
            <div className={s.container}>

            </div>
        </>
    )
}

const mapStateToProps= state => ({
    gameSettings: state.gameSettings
})

export default connect(mapStateToProps)(Game)