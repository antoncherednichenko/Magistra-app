import { useState } from 'react'
import { Link } from 'react-router-dom'
import Bush from './Bush/Bush'
import Girl from './Girl/Girl'
import s from './menu.module.css'

export default function Menu() {
    const[list, setList] = useState([
        {id: 1, title: 'Математика', route: '/math'},
        {id: 3, title: 'Русский язык', route: '/math/maze'},
        {id: 4, title: 'Английский язык', route: '#'}
    ])
    return (
        <div className={s.container}>
            <div className={s.shape}>
                <ul className={s.list}>
                    {list.map(el =><Link key={el.id} className={s.item} to={el.route} >{el.title}</Link> )}
                </ul>
                <div className={s.squer}></div>
                <div className={s.circle}></div>
                <Girl pos={s.girl}/>
                <Bush bushPosition ={s.bush} />
            </div>
        </div>
    )
}
