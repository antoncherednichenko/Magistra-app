import s from './gameHeader.module.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Settings from '../../Settings/Settings'

function GameHeader({gameSettings}) {

    return (
        <header className={s.header}>
            <div className={`${s.container} ${s.flexContainer}`}>
                <p  className={s.back}><Link to='/'> {'< НАЗАД'} </Link></p>
                <Settings
                    values={['Легко', 'Средне', 'Сложно',]}
                    selectedValue={gameSettings.complexity === 1?'Легко':gameSettings.complexity === 2?'Средне':'Сложно'} 
                />
                <Settings
                    values={['1', '2', '3',]}
                    selectedValue={gameSettings.windows}
                />
                <Link to='/' className={s.logo}>Magistra games</Link>
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    gameSettings: state.gameSettings
})

export default connect(mapStateToProps)(GameHeader)