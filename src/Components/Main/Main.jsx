import React, { useState } from 'react'
import Header from './Header/Header'
import s from './main.module.css'
import Menu from './Menu/Menu'       

export default function Main() {
    return (
        <>
            <Header />
            <Menu />
        </>
    )
}