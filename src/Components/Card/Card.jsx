
import s from './card.module.css'

export default function Card({title, url, id, onShow}) {

    return (
        <button onClick={()=>onShow()} className={s.card} type='button'>
            <h2 className={s.title}>{title}</h2>
            <img className={s.icon} src={url} alt='card' />
        </button>
    )
}