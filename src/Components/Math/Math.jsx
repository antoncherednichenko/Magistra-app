import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from '../Main/Header/Header'
import Modal from '../Modal/Modal'
import Card from '../Card/Card'
import s from './math.module.css'
import store from '../../store/store'
import {useLocation } from "react-router-dom"

function Math({mathCards}){
    const [isVisible, setIsVisible] = useState(false)
    const dispatch = store.dispatch
    const location = useLocation()
    useEffect(() => localStorage.setItem('prevPath', location.pathname) ,[])
    useEffect(() => dispatch({type:'SET_DEFAULT'}), [])

    const showModal = (value, id) => {
        setIsVisible(prevIsVisible => prevIsVisible = true)
        dispatch({type:'SET_ROUTE', payload: value})
        dispatch({type:'SET_GAME', payload: id})

    }
    const hideModal = () => {
        setIsVisible(prevIsVisible => prevIsVisible = false)
        dispatch({type:'SET_DEFAULT'})
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
                                route={card.route}
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