import React, { useState } from "react";
import './header.css'

export default function Header() {

    return(
        <header className='header'>
            <div className='header__nav nav container'>
                <a className='nav__link' href='https://magistra-do.ru/' target='_blank'>
                   <img src='../../../img/icons/magistra-logo.svg' alt='Логотип центра Магистра'/>
                </a>
                <div className='nav__btns'>
                <button className='nav__btn' type='button'>Регистрация</button>
                <button className='nav__btn' type='button'>Войти</button>
                </div>
            </div>
        </header>
    )
}
