import React from 'react'
import s from './header.module.css'

export default function Header(){

    return (
        <>
            <header className={s.header}>
                <div className={`${s.container} ${s.flexContainer}`}>
                    <p className={s.logo}>
                    <a href='https://magistra-do.ru/' target='_blank'>Magistra games</a>
                    </p>
                    <nav className={s.nav}>
                        <ul className={s.list}>
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