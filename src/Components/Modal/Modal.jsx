import { useState } from 'react'
import s from './modal.module.css'

export default function Modal({visible}){
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
    const [offsetAmount, setOffsetAmount] = useState(0)
    const [offsetLevel, setOffsetLevel] = useState(0)
    const nextAmount = () => {
        if (offsetAmount === -150) {
            setOffsetAmount(0)
        } else {
            setOffsetAmount(prevOffset => prevOffset - 50)
        }
    }
    const prevAmount = () => {
        if (offsetAmount === 0) {
            setOffsetAmount(-150)
        } else {
            setOffsetAmount(prevOffset => prevOffset + 50)
        }
    }

    const nextLevel = () => {
        if (offsetLevel === -250) {
            setOffsetLevel(0)
        } else {
            setOffsetLevel(prevOffset => prevOffset - 125)
        }
    }
    const prevLevel = () => {
        if (offsetLevel === 0) {
            setOffsetLevel(-250)
        } else {
            setOffsetLevel(prevOffset => prevOffset + 125)
        }
    }
    return(
        <div className={s.background}>
            <div className={s.modal}>
                <div className={s.close}>
                    <button onClick={()=>visible()} className={`${s.btn} ${s.closeBtn} `} type='button'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2222 16.0003L26.5397 7.6828C27.1541 7.06838 27.1541 6.07524 26.5397 5.46082C25.9253 4.84639 24.9321 4.84639 24.3177 5.46082L16.0002 13.7783L7.68279 5.46082C7.06837 4.84639 6.07524 4.84639 5.46082 5.46082C4.84639 6.07524 4.84639 7.06838 5.46082 7.6828L13.7783 16.0003L5.46082 24.3178C4.84639 24.9323 4.84639 25.9254 5.46082 26.5398C5.76724 26.8463 6.16952 27.0003 6.5718 27.0003C6.97408 27.0003 7.37636 26.8463 7.68279 26.5398L16.0002 18.2223L24.3177 26.5398C24.6241 26.8463 25.0264 27.0003 25.4287 27.0003C25.831 27.0003 26.2333 26.8463 26.5397 26.5398C27.1541 25.9254 27.1541 24.9323 26.5397 24.3178L18.2222 16.0003Z" fill="#191263"/>
                    </svg>
                    </button>
                </div>
                <div className={s.container}>
                    <h2 className={s.title}>Количество экранов</h2>
                    <div className={s.amountContainer}>
                        <button onClick={() => prevAmount()} className={`${s.btn} ${s.amountPrev} `} type='button'>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill_rule="evenodd" clip_rule="evenodd" d="M26.8 33.0003C26.2368 33.0003 25.6736 32.8369 25.2446 32.5119L7.64512 19.1787C6.78495 18.527 6.78495 17.4737 7.64512 16.822L25.2446 3.48875C26.1048 2.83708 27.4952 2.83708 28.3554 3.48875C29.2155 4.14041 29.2155 5.19374 28.3554 5.8454L12.3112 18.0003L28.3554 30.1553C29.2155 30.8069 29.2155 31.8603 28.3554 32.5119C27.9264 32.8369 27.3632 33.0003 26.8 33.0003" fill="#191263"/>
                            </svg>
                        </button>
                        <div className={s.amountWindow}>
                            <div style={{transform:`translateX(${offsetAmount}px)`}} className={s.amountBar}>
                                {amountArr.map(el => <div className={s.amountEl} key={el.id}>{el.title}</div>)}
                            </div>
                        </div>
                        <button onClick={() => nextAmount()} className={`${s.btn} ${s.amountNext} `} type='button'>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill_rule="evenodd" clip_rule="evenodd" d="M9.2 33.0003C9.76318 33.0003 10.3264 32.8369 10.7554 32.5119L28.3549 19.1787C29.2151 18.527 29.2151 17.4737 28.3549 16.822L10.7554 3.48875C9.89518 2.83708 8.50482 2.83708 7.64464 3.48875C6.78447 4.14041 6.78447 5.19374 7.64464 5.8454L23.6888 18.0003L7.64464 30.1553C6.78447 30.8069 6.78447 31.8603 7.64464 32.5119C8.07363 32.8369 8.63682 33.0003 9.2 33.0003" fill="#191263"/>
                            </svg>
                        </button>
                    </div>
                   <div className={s.level}>
                    <h2 className={s.title}>Сложность</h2>
                        <div className={s.levelContainer}>
                            <button onClick={() => prevLevel()} className={`${s.btn} ${s.levelPrev} `} type='button'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8 33.0003C26.2368 33.0003 25.6736 32.8369 25.2446 32.5119L7.64512 19.1787C6.78495 18.527 6.78495 17.4737 7.64512 16.822L25.2446 3.48875C26.1048 2.83708 27.4952 2.83708 28.3554 3.48875C29.2155 4.14041 29.2155 5.19374 28.3554 5.8454L12.3112 18.0003L28.3554 30.1553C29.2155 30.8069 29.2155 31.8603 28.3554 32.5119C27.9264 32.8369 27.3632 33.0003 26.8 33.0003" fill="#191263"/>
                                </svg>
                            </button>
                            <div className={s.levelWindow}>
                                <div style={{transform:`translateX(${offsetLevel}px)`}} className={s.levelBar}>
                                    {levelArr.map(el => <div className={s.levelEl} key={el.id}>{el.title}</div>)}
                                </div>
                            </div>
                            <button onClick={() => nextLevel()} className={`${s.btn} ${s.levelNext} `} type='button'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.2 33.0003C9.76318 33.0003 10.3264 32.8369 10.7554 32.5119L28.3549 19.1787C29.2151 18.527 29.2151 17.4737 28.3549 16.822L10.7554 3.48875C9.89518 2.83708 8.50482 2.83708 7.64464 3.48875C6.78447 4.14041 6.78447 5.19374 7.64464 5.8454L23.6888 18.0003L7.64464 30.1553C6.78447 30.8069 6.78447 31.8603 7.64464 32.5119C8.07363 32.8369 8.63682 33.0003 9.2 33.0003" fill="#191263"/>
                                </svg>
                            </button>
                        </div>
                   </div>
                    <button className={s.begin} type='button'>Начать</button>
                </div>
            </div>
        </div>
    )
}