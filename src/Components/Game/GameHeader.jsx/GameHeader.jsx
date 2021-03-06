import s from './gameHeader.module.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import Settings from '../../Settings/Settings'
import Burger from '../../Burger/Burger'

function GameHeader({complexity, windows, changeComplexity, changeWindows}) {
    
    return (
        <header className={s.header}>
            <p  className={s.back}><Link to={localStorage.getItem('prevPath')}> {'< НАЗАД'} </Link></p>
            <Settings
                    onSelected={(e) => changeComplexity(e.target.textContent)}
                    values={['Легко', 'Средне', 'Сложно',]}
                    selectedValue={complexity}
                />
                <Settings
                    onSelected={(e) => changeWindows(e.target.textContent)}
                    values={['1', '2', '3',]}
                    selectedValue={windows}
                />
            {/* <div className={`${s.container} ${s.flexContainer}`}> */}
                
                <Link to='/' className={s.logo}>Magistra games</Link>
            {/* </div> */}
        </header>
    )
}


export default GameHeader