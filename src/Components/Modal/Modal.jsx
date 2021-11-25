import { useState } from 'react'
import s from './modal.module.css'
import { Link } from 'react-router-dom'

export default function Modal({hide}){
  
    const [levelArr, setLevelArr] = useState([
        {id: 1, title: 'Легко'},
        {id: 2, title: 'Средне'},
        {id: 3, title: 'Сложно'},
    ])
    const [windowsArr, setWindowsArr] = useState([
        {id: 1, title: '1'},
        {id: 2, title: '2'},
        {id: 3, title: '3'},
    ])
    const [offsetLevel, setOffsetLevel] = useState(0)
    const [offsetWindow, setOffsetWindow] = useState(0)
    const [level, setLevel] = useState(1)
    const [window, setWindow] = useState(1)
    const nextLevel = () => {
        if (offsetLevel === -250) {
            setOffsetLevel(0)
            setLevel(1)
        } else {
            setOffsetLevel(prevOffset => prevOffset - 125)
            setLevel(level + 1)
        }
    }
    const prevLevel = () => {
        if (offsetLevel === 0) {
            setOffsetLevel(-250)
            setLevel(3)
        } else {
            setOffsetLevel(prevOffset => prevOffset + 125)
            setLevel(level - 1)
        }
    }

    const nextWindow = () => {
        if (offsetWindow === -250) {
            setOffsetWindow(0)
            setWindow(1)
        } else {
            setOffsetWindow(prevOffset => prevOffset - 125)
            setWindow(window + 1)
        }
    }
    const prevWindow = () => {
        if (offsetWindow === 0) {
            setOffsetWindow(-250)
            setWindow(3)
        } else {
            setOffsetWindow(prevOffset => prevOffset + 125)
            setWindow(window - 1)
        }
    }
    return(
        <div className={s.background}>
            <div className={s.modal}>
                <div className={s.close}>
                    <button onClick={()=>hide()} className={`${s.btn} ${s.closeBtn} `} type='button'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clipRule="evenodd" d="M18.2222 16.0003L26.5397 7.6828C27.1541 7.06838 27.1541 6.07524 26.5397 5.46082C25.9253 4.84639 24.9321 4.84639 24.3177 5.46082L16.0002 13.7783L7.68279 5.46082C7.06837 4.84639 6.07524 4.84639 5.46082 5.46082C4.84639 6.07524 4.84639 7.06838 5.46082 7.6828L13.7783 16.0003L5.46082 24.3178C4.84639 24.9323 4.84639 25.9254 5.46082 26.5398C5.76724 26.8463 6.16952 27.0003 6.5718 27.0003C6.97408 27.0003 7.37636 26.8463 7.68279 26.5398L16.0002 18.2223L24.3177 26.5398C24.6241 26.8463 25.0264 27.0003 25.4287 27.0003C25.831 27.0003 26.2333 26.8463 26.5397 26.5398C27.1541 25.9254 27.1541 24.9323 26.5397 24.3178L18.2222 16.0003Z" fill="#191263"/>
                    </svg>
                    </button>
                </div>
                <div className={s.container}>
                   <div className={s.level}>
                    <h2 className={s.title}>Сложность</h2>
                        <div className={s.levelContainer}>
                            <button onClick={() => prevLevel()} className={`${s.btn} ${s.levelPrev} `} type='button'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clipRule="evenodd" d="M26.8 33.0003C26.2368 33.0003 25.6736 32.8369 25.2446 32.5119L7.64512 19.1787C6.78495 18.527 6.78495 17.4737 7.64512 16.822L25.2446 3.48875C26.1048 2.83708 27.4952 2.83708 28.3554 3.48875C29.2155 4.14041 29.2155 5.19374 28.3554 5.8454L12.3112 18.0003L28.3554 30.1553C29.2155 30.8069 29.2155 31.8603 28.3554 32.5119C27.9264 32.8369 27.3632 33.0003 26.8 33.0003" fill="#191263"/>
                                </svg>
                            </button>
                            <div className={s.levelWindow}>
                                <div style={{transform:`translateX(${offsetLevel}px)`}} className={s.levelBar}>
                                    {levelArr.map(el => <div className={s.levelEl} key={el.id}>{el.title}</div>)}
                                </div>
                            </div>
                            <button onClick={() => nextLevel()} className={`${s.btn} ${s.levelNext} `} type='button'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clipRule="evenodd" d="M9.2 33.0003C9.76318 33.0003 10.3264 32.8369 10.7554 32.5119L28.3549 19.1787C29.2151 18.527 29.2151 17.4737 28.3549 16.822L10.7554 3.48875C9.89518 2.83708 8.50482 2.83708 7.64464 3.48875C6.78447 4.14041 6.78447 5.19374 7.64464 5.8454L23.6888 18.0003L7.64464 30.1553C6.78447 30.8069 6.78447 31.8603 7.64464 32.5119C8.07363 32.8369 8.63682 33.0003 9.2 33.0003" fill="#191263"/>
                                </svg>
                            </button>
                        </div>
                   </div>
                </div>

                <div className={s.container}>
                   <div className={s.level}>
                    <h2 className={s.title}>Количество экранов</h2>
                        <div className={s.levelContainer}>
                            <button onClick={() => prevWindow()} className={`${s.btn} ${s.levelPrev} `} type='button'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clipRule="evenodd" d="M26.8 33.0003C26.2368 33.0003 25.6736 32.8369 25.2446 32.5119L7.64512 19.1787C6.78495 18.527 6.78495 17.4737 7.64512 16.822L25.2446 3.48875C26.1048 2.83708 27.4952 2.83708 28.3554 3.48875C29.2155 4.14041 29.2155 5.19374 28.3554 5.8454L12.3112 18.0003L28.3554 30.1553C29.2155 30.8069 29.2155 31.8603 28.3554 32.5119C27.9264 32.8369 27.3632 33.0003 26.8 33.0003" fill="#191263"/>
                                </svg>
                            </button>
                            <div className={s.levelWindow}>
                                <div style={{transform:`translateX(${offsetWindow}px)`}} className={s.levelBar}>
                                    {windowsArr.map(el => <div className={s.levelEl} key={el.id}>{el.title}</div>)}
                                </div>
                            </div>
                            <button onClick={() => nextWindow()} className={`${s.btn} ${s.levelNext} `} type='button'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clipRule="evenodd" d="M9.2 33.0003C9.76318 33.0003 10.3264 32.8369 10.7554 32.5119L28.3549 19.1787C29.2151 18.527 29.2151 17.4737 28.3549 16.822L10.7554 3.48875C9.89518 2.83708 8.50482 2.83708 7.64464 3.48875C6.78447 4.14041 6.78447 5.19374 7.64464 5.8454L23.6888 18.0003L7.64464 30.1553C6.78447 30.8069 6.78447 31.8603 7.64464 32.5119C8.07363 32.8369 8.63682 33.0003 9.2 33.0003" fill="#191263"/>
                                </svg>
                            </button>
                        </div>
                   </div>
                    <button onClick={()=>{
                    }} className={s.begin} type='button'>Начать</button>
                </div>
            <div className={s.bushes}>
                <svg width="153" height="140" viewBox="0 0 153 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M124.147 68.1099C131.939 66.1696 139.829 70.9134 141.769 78.7054V78.7054L132.175 81.0943C124.383 83.0346 116.494 78.2909 114.553 70.4989V70.4989L124.147 68.1099Z" fill="#79C578"/>
                    <path d="M108.565 77.481C116.357 75.5407 124.247 80.2844 126.187 88.0765V88.0765L116.593 90.4654C108.801 92.4057 100.912 87.662 98.9712 79.8699V79.8699L108.565 77.481Z" fill="#79C578"/>
                    <path d="M90.9856 90.5317C99.5367 88.4024 108.195 93.6083 110.324 102.159V102.159L99.7956 104.781C91.2445 106.91 82.5863 101.705 80.457 93.1534V93.1534L90.9856 90.5317Z" fill="#79C578"/>
                    <path d="M117.825 57.5261C122.194 50.7889 120.275 41.7854 113.538 37.4161V37.4161L108.158 45.7112C103.789 52.4483 105.708 61.4519 112.445 65.8212V65.8212L117.825 57.5261Z" fill="#79C578"/>
                    <path d="M100.064 67.7409C104.434 61.0038 102.514 52.0002 95.7769 47.6309V47.6309L90.3972 55.926C86.0279 62.6632 87.9474 71.6667 94.6845 76.0361V76.0361L100.064 67.7409Z" fill="#79C578"/>
                    <path d="M81.8295 79.3832C85.3355 71.2984 81.6237 61.9022 73.539 58.3962V58.3962L69.2222 68.3505C65.7161 76.4353 69.4279 85.8315 77.5127 89.3375V89.3375L81.8295 79.3832Z" fill="#79C578"/>
                    <path d="M129.447 58.5966C120.921 61.9584 93.172 77.1966 50.3905 111.255" stroke="#79C578" stroke-width="3"/>
                    <path d="M46.6624 30.0024C42.8512 22.9345 34.032 20.2944 26.9641 24.1055V24.1055L31.6565 32.8078C35.4677 39.8758 44.2869 42.5159 51.3548 38.7048V38.7048L46.6624 30.0024Z" fill="#8DDE8C"/>
                    <path d="M50.2234 47.8333C46.4123 40.7653 37.5931 38.1252 30.5251 41.9363V41.9363L35.2176 50.6387C39.0287 57.7066 47.8479 60.3467 54.9158 56.5356V56.5356L50.2234 47.8333Z" fill="#8DDE8C"/>
                    <path d="M52.4084 69.6183C48.226 61.8619 38.5476 58.9645 30.7911 63.1469V63.1469L35.9407 72.6971C40.1231 80.4536 49.8015 83.3509 57.5579 79.1685V79.1685L52.4084 69.6183Z" fill="#8DDE8C"/>
                    <path d="M58.7445 27.5519C60.7846 19.7855 68.7344 15.1433 76.5009 17.1835V17.1835L73.989 26.7459C71.9489 34.5124 63.9991 39.1545 56.2326 37.1144V37.1144L58.7445 27.5519Z" fill="#8DDE8C"/>
                    <path d="M63.1483 47.5617C65.1884 39.7952 73.1383 35.1531 80.9047 37.1932V37.1932L78.3928 46.7557C76.3527 54.5222 68.4029 59.1643 60.6364 57.1242V57.1242L63.1483 47.5617Z" fill="#8DDE8C"/>
                    <path d="M66.8161 68.8831C70.4339 60.8477 79.8807 57.2665 87.9161 60.8843V60.8843L83.4617 70.7779C79.8439 78.8133 70.3972 82.3944 62.3618 78.7767V78.7767L66.8161 68.8831Z" fill="#8DDE8C"/>
                    <path d="M50.1291 19.6788C53.3836 28.2469 60.7971 59.0239 64.4149 113.587" stroke="#8DDE8C" stroke-width="3"/>
                </svg>
            </div>
            </div>
        </div>
    )
}