import { useEffect } from 'react'
import { useState } from 'react'
import s from './Nav.module.css'

export default function Nav({array, show}) {
    const[navArr, setNavArr] = useState([])
    useEffect(() => setNavArr(array), [show])
    return (
        <ul
        className={`${show ? s.burgerList : s.list}`}>
            {navArr.map((item, index) => (
                <li key={index + Date.now()} className={s.item}>
                    <a href={item.link} target='_blank'>{item.title}</a>
                </li>
            ))}
        </ul>
    )
}