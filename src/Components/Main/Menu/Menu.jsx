import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Bush from './Bush/Bush'
import Girl from './Girl/Girl'
import s from './menu.module.css'

function Menu({menuList}) {
    return (
        <div className={s.container}>
            <div className={s.shape}>
                <ul className={s.list}>
                    {menuList.map(el =><Link key={el.id} className={s.item} to={el.route} >{el.title}</Link> )}
                </ul>
                <div className={s.squer}></div>
                <div className={s.circle}></div>
                <Girl pos={s.girl}/>
                <Bush bushPosition ={s.bush} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    menuList: state.menuList
})

export default connect(mapStateToProps)(Menu)