import React, { useState } from "react";
import './description.css'

export default function Description() {
    return (
        <div className='description'>
            <div className='description__wrapper'>
                <img className='description__img' src='../../../img/icons/magistra-logo.svg' alt='Логотип центра Магистра'/>
            </div>
            <p className='description__description'>
            Это дополнительное образование для детей и взрослых по специальным программам,
            которые разработаны нашими специалистами.
            </p>
            <div className='description__btns-wrapper'>
                <div className='description__btns'>
                    <button className='description__btn reg-btn'>Регистрация</button>
                    <button className='description__btn entry-btn'>Войти</button>
                </div>
            </div>
        </div>
    )
}
