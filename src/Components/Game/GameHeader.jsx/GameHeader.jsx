import s from './gameHeader.module.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Settings from '../../Settings/Settings'

function GameHeader({gameSettings}) {
    const [isVisibleComplexity, setIsvisibleComplexity] = useState(false)
    const [isVisibleWindows, setIsvisibleWindows] = useState(false)

    const changeVisibleComplexity = () => setIsvisibleComplexity(prevIsVisibleComplexity => prevIsVisibleComplexity = !prevIsVisibleComplexity)
    const changeVisibleWindows = () => setIsvisibleWindows(prevIsVisibleWindows => prevIsVisibleWindows = !prevIsVisibleWindows  )
    return (
        <header className={s.header}>
            <div className={`${s.container} ${s.flexContainer}`}>
                <p  className={s.back}><Link to='/'> {'< НАЗАД'} </Link></p>
                <ul className={s.settings}>
                    <Settings
                        gameSettings={gameSettings}
                        settings={['Легко', 'Средне', 'Сдожно']}
                    />
                    <li onClick={()=>changeVisibleWindows()} className={s.item}>
                        {gameSettings.windows === 1? '1 ˅':gameSettings.windows === 2? '2 ˅': '3 ˅'}
                        <ul style={{display:`${isVisibleWindows? 'block':'none'}`}} className={s.values}>
                            <li className={s.setting}>
                                1
                            </li>
                            <li className={s.setting}>
                                2
                            </li>
                            <li className={s.setting}>
                                3
                            </li>
                        </ul>
                    </li>
                </ul>
                <Link to='/' className={s.logo}>Magistra games</Link>
            </div>
        </header>
    )
}

const mapStateToProps = state => ({
    gameSettings: state.gameSettings
})

export default connect(mapStateToProps)(GameHeader)