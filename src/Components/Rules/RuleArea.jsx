import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import Header from '../Main/Header/Header'
import Boy from './Rule/Boy/Boy'
import s from './RuleArea.module.css'

 function RuleArea({mathCards}) {
     const currentPath = useLocation().pathname
     localStorage.setItem('prevPath', currentPath)
    const [rules, setRules]  = useState([])
    useEffect(() => setRules(mathCards), [])
    return (
        <>
            <Header />
            <div className={s.container}>
                <ul className={s.list} >
                    {rules.map(rule => (
                        <li className={s.li}  key={Date.now() * Math.random()}>
                           <Link className={s.item} to={`${rule.route}-rule`} type='button'> {rule.title}</Link>
                        </li>
                    ))}
                </ul>
            
                <Boy
                    position={{
                        bottom: 0,
                        right: 0,
                    }}
                />
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    mathCards: state.mathCards
})

export default connect(mapStateToProps)(RuleArea)