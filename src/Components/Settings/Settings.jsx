import s from './settings.module.css'
import { useState } from 'react'

export default function Settings({gameSettings, settings}) {
    const[isVisible, setIsVisible] = useState(false)
    return(
        <li onClick={()=>setIsVisible(prevIsVisible => prevIsVisible = !prevIsVisible)} className={s.item}>
            {gameSettings.complexity === 1? 'Легко ˅':gameSettings.complexity === 2? 'Средне ˅': 'Сложно ˅'}
            <ul style={{display:`${isVisible? 'block':'none'}`}} className={s.values}>
                {settings.map((setting, index) => <li className={s.setting}>{setting}</li>)}
            </ul>
        </li>
    )
}