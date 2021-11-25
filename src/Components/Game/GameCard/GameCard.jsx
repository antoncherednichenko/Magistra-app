import s from './gameCard.module.css'
import { connect } from 'react-redux'
import GameCardHeader from './GameCardHeader/GameCardHeader'

function GameCard({gameSettings, children}) {

    return (
        <div className={s.gameCard}>
            <GameCardHeader />
            {children}
        </div>
    )
}

const mapStateToProps = state => ({
    gameSettings: state.gameSettings
})

export default connect(mapStateToProps)(GameCard)