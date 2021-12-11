import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Burger from '../../Burger/Burger'
import s from './header.module.css'
import Nav from './Nav/Nav'

export default function Header(){
    const[menuArr, setMenuArr] = useState([
        {link:'https://magistra-do.ru/kursy', title: 'КУРСЫ' },
        {link:'https://magistra-do.ru/programmy', title: 'ПРОГРАММЫ' },
        {link:'https://magistra-do.ru/onlajn-shkola', title: 'ОНЛАЙН-ШКОЛА' },
    ])
    const [isVisible, setIsVisible] = useState(false)
    const burgerHandleChange = () => setIsVisible(!isVisible)
    return (
        <>
            <header className={s.header}>
                <div className={`${s.container} ${s.flexContainer}`}>
                    <Link to='/' className={s.logo}>Magistra games</Link>
                    <nav
                    className={s.nav}>
                        <Nav 
                            array={menuArr}
                            show={isVisible} 
                        />
                        <Burger
                            className={s.burgerBtn}
                            change={burgerHandleChange}
                        />
                    </nav>
                </div>
            </header>
        </>
    )
}