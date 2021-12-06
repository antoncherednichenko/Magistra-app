import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import Header from '../../Main/Header/Header'
import s from './Rule.module.css'

function Rule({rules}) {
    const currentRule = useLocation().pathname.replace('/', '')
    const [rule, setRule] = useState({
            title: 'game',
            animation: 'animation',
            description: 'description'
    })
    useEffect(() => setRule(rules[currentRule]), [])
    return(
        <>
        <Header />
        <div className={s.container}>
            <div className={s.wrapper}>
                <h1 className={s.title}>{rule.title}</h1>
                <div className={s.animation}>
                    <img src={rule.animation} alt='svg animation' />
                </div>
                <p className={s.description}>{rule.description}</p>
            </div>
            <Link className={s.back} to={localStorage.getItem('prevPath')}>НАЗАД</Link>
        </div>
        </>
    )
}

const mapStateToProps = state => (
    {rules: state.rules}
)

export default connect(mapStateToProps)(Rule)