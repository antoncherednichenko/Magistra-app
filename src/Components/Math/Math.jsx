import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../Main/Header/Header'
import Modal from '../Modal/Modal'
import Card from '../Card/Card'
import s from './math.module.css'

function Math({mathCards}){
    const [isVisible, setIsVisible] = useState(false)

    const showModal = () => {
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
                            <Card
                                onShow={showModal}
                                key={card.id}
                                title={card.title}
                                url={card.url}
                                id={card.id}
                            />
                        ))}
                    </div>
                    <div className={s.square}></div>
                    <div className={s.circle}></div>
                    <div className={s.triangle}></div>
                </div>
                <img className={s.mathBush} src='./img/mathbush.svg' alt='bush illustration'/>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    mathCards: state.mathCards
})

export default connect(mapStateToProps)(Math)