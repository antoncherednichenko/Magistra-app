import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Burger from '../../Burger/Burger'
import s from './header.module.css'

export default function Header(){

    return (
        <>
            <header className={s.header}>
                <div className={`${s.container} ${s.flexContainer}`}>
                    <Link to='/' className={s.logo}>Magistra games</Link>
                    <nav
                    className={s.nav}>
                        <ul
                        className={s.list}>
                            <li className={s.item}>
                                <a href='https://magistra-do.ru/kursy' target='_blank'>КУРСЫ</a>
                            </li>
                            <li className={s.item}>
                                <a href='https://magistra-do.ru/programmy' target='_blank'>ПРОГРАММЫ</a>
                                </li>
                            <li className={s.item}>
                            <a href='https://magistra-do.ru/onlajn-shkola' target='_blank'>ОНЛАЙН-ШКОЛА</a>
                            </li>
                        </ul>
                        <Burger
                            className={s.burgerBtn} 
                        />
                    </nav>
                </div>
            </header>
        </>
    )
}