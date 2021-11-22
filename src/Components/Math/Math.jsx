import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Main/Header/Header'
import Modal from '../Modal/Modal'
import s from './math.module.css'

export default function Math(){
    const[cards, setCards] = useState([
        {
            id: '1',
            title: 'ЛАБИРИНТЫ',
            icon: './img/labirint_animated.svg',
            route: '/maze'
        },
        {
            id: 2,
            title: 'ТАБЛИЦА ШУЛЬТЕ',
            icon: './img/table_animated.svg',
            route: '/table_shulte'
        },
        {
            id: 3,
            title: 'РЕШИ ПРИМЕР',
            icon: './img/primer_animated.svg',
            route: '/solve'
        },
        {
            id: 4,
            title: 'ЗАПОМНИ И ПОВТОРИ',
            icon: './img/memory_animated.svg',
            route: '/remember'
        },
    ])
    const [isVisible, setIsVisible] = useState(false)

    const showModal = (ev) => {
        setIsVisible(prevIsVisible => prevIsVisible = true)
    }
    const hideModal = () => {
        setIsVisible(prevIsVisible => prevIsVisible = false)
    }
    return(
        <>
            <Header />
            {isVisible && <Modal hide={hideModal}/>}
            <div className={s.page}>
                <div className={s.container}>
                    <div className={s.cardBar}>
                        {cards.map(card => (
                            <button data-path={card.route} onClick={(e) => showModal(e)} className={s.card} key={card.id}>
                                <h2 data-path={card.route} className={s.title}>{card.title}</h2>
                                <img data-path={card.route} className={s.icon} src={card.icon} alt='icon' />
                            </button>
                        ))}
                    </div>
                </div>
                <img className={s.mathBush} src='./img/mathbush.svg' alt='bush illustration'/>
                <div className={s.square}></div>
                <div className={s.circle}></div>
                <div className={s.triangle}></div>
            </div>
        </>
    )
}