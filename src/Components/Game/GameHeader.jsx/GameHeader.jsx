import s from './gameHeader.module.css'
import { Link } from 'react-router-dom'

export default function GameHeader() {

    return (
        <header className={s.header}>
            <div className={`${s.container} ${s.flexContainer}`}>
                <p  className={s.back}><Link to='/'> НАЗАД </Link></p>
                <ul className={s.settings}>
                    <li className={s.item}>
                        <div className={s.wrapper}>
                            
                        </div>
                    </li>
                </ul>
                <Link to='/' className={s.logo}>Magistra games</Link>
            </div>
        </header>
    )
}