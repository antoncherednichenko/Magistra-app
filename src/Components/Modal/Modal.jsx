import { useState } from 'react'
import s from './modal.module.css'

export default function Modal(){
    const[amountArr, setAmountArr] = useState([
        {id: 1, title: '1'},
        {id: 2, title: '2'},
        {id: 3, title: '3'},
        {id: 4, title: '4'},
    ])
    const [levelArr, setLevelArr] = useState([
        {id: 1, title: 'Легко'},
        {id: 2, title: 'Средне'},
        {id: 3, title: 'Сложно'},
    ])
    return(
        <div className={s.background}>
            <div className={s.modal}>
                <div className={s.close}>
                    <button className={`${s.btn} ${s.closeBtn} `} type='button'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2222 16.0003L26.5397 7.6828C27.1541 7.06838 27.1541 6.07524 26.5397 5.46082C25.9253 4.84639 24.9321 4.84639 24.3177 5.46082L16.0002 13.7783L7.68279 5.46082C7.06837 4.84639 6.07524 4.84639 5.46082 5.46082C4.84639 6.07524 4.84639 7.06838 5.46082 7.6828L13.7783 16.0003L5.46082 24.3178C4.84639 24.9323 4.84639 25.9254 5.46082 26.5398C5.76724 26.8463 6.16952 27.0003 6.5718 27.0003C6.97408 27.0003 7.37636 26.8463 7.68279 26.5398L16.0002 18.2223L24.3177 26.5398C24.6241 26.8463 25.0264 27.0003 25.4287 27.0003C25.831 27.0003 26.2333 26.8463 26.5397 26.5398C27.1541 25.9254 27.1541 24.9323 26.5397 24.3178L18.2222 16.0003Z" fill="#191263"/>
                    </svg>
                    </button>
                </div>
                <div className={s.container}>
                    <h2 className={s.title}>Количество экранов</h2>
                    <div className={s.amountContainer}>
                        <button className={`${s.btn} ${s.amountPrev} `} type='button'></button>
                        <div className={s.amountWindow}>
                            <div className={s.amountBar}>
                                {amountArr.map(el => <div className={s.amountEl} key={el.id}>{el.title}</div>)}
                            </div>
                        </div>
                        <button className={`${s.btn} ${s.amountNext} `} type='button'></button>
                    </div>
                    <h2 className={s.title}>Сложность</h2>
                    <div className={s.levelContainer}>
                        <button className={`${s.btn} ${s.levelPrev} `} type='button'></button>
                        <div className={s.levelWindow}>
                            <div className={s.levelBar}>
                                {levelArr.map(el => <div className={s.levelEl} key={el.id}>{el.title}</div>)}
                            </div>
                        </div>
                        <button className={`${s.btn} ${s.levelNext} `} type='button'></button>
                    </div>
                    <button className={s.begin} type='button'>Начать</button>
                </div>
            </div>
        </div>
    )
}