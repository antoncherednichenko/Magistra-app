import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../Main/Header/Header'
import Modal from '../Modal/Modal'
import s from './math.module.css'

function Math({mathCards}){
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
                        {mathCards.map(card => (
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

const mapStateToProps = state => ({
    mathCards: state.mathCards
})

export default connect(mapStateToProps)(Math)