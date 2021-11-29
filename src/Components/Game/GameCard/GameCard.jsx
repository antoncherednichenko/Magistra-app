import s from './gameCard.module.css'
import { connect } from 'react-redux'
import GameCardHeader from './GameCardHeader/GameCardHeader'

function GameCard({complexity, children}) {

    return (
        <div className={s.gameCard}>
            <GameCardHeader complexity={complexity} />
            {children}
        </div>
    )
}

const mapStateToProps = state => ({
    gameSettings: state.gameSettings
})

export default connect(mapStateToProps)(GameCard)