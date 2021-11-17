import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Main/Header/Header'
import s from './math.module.css'

export default function Math(){
    const[cards, setCards] = useState([
        {
            id: 1,
            title: 'ЛАБИРИНТЫ',
            icon: '#',
            route: '/maze'
        },
        {
            id: 2,
            title: 'ТАБЛИЦА ШУЛЬТЕ',
            icon: '#',
            route: '/table_shulte'
        },
        {
            id: 3,
            title: 'РЕШИ ПРИМЕР',
            icon: '#',
            route: '/solve'
        },
        {
            id: 4,
            title: 'ЗАПОМНИ И ПОВТОРИ',
            icon: '#',
            route: '/remember'
        },
    ])
    return(
        <>
            <Header />
            <div className={s.page}>
                <div className={s.container}>
                    <div className={s.cardBar}>
                        {cards.map(card => (
                            <Link className={s.card} to={card.route} key={card.id}>
                                <h2 className={s.title}>{card.title}</h2>
                            </Link>
                        ))}
                        {/* <div className={s.square}></div>
                        <div className={s.circle}></div>
                        <div className={s.triangle}></div> */}
                    </div>
                    
                </div>
            </div>
        </>
    )
}