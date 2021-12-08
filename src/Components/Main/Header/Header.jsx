import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.css'

export default function Header(){

    return (
        <>
            <header className={s.header}>
                <div className={`${s.container} ${s.flexContainer}`}>
                    <Link to='/' className={s.logo}>Magistra games</Link>
                    <nav
                    className={`s.nav`}>
                        <button className={s.burger}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H21ZM21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H21ZM21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H21Z" fill="#191263"/>
                            </svg>
                        </button>
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
                    </nav>
                </div>
            </header>
        </>
    )
}