import s from './gameCardHeader.module.css'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Settings from '../../../Settings/Settings'


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

function GameCardHeader({complexity, onSelected, update}) {
    const names = [
        'Месье Колбасье ', 
        'Кабачок', 
        'Хомячок', 
        'Пупсяндра', 
        'Капитошка',
        'Живжик',
        ]
    const [bgColor, setBgColor] = useState('#fff')
    const [placeholder, setPlaceholder] = useState('')
    useEffect(()=>{
        const index = randomInteger(0, names.length)
        setPlaceholder(names[index])
    }, [])
    const setColor = (e) => {
        const currentColor = e.currentTarget.value
        setBgColor(prev => prev = currentColor)
    }
    return(
        <>
        <header style={{backgroundColor: `${bgColor}`}} className={s.gameCardHeader}>
            <div className={s.wrapper}>
                <input className={s.namePlace} placeholder={placeholder}/>
                <button onClick={()=>update()} className={s.update} type='button'>
                    <svg width="24" height="38" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.86796 17.1003C2.84221 17.0838 3.65754 17.8037 3.78322 18.7466L3.79974 18.968L3.80663 19.3931C4.01366 25.5211 9.05015 30.4 15.2 30.4C15.5552 30.4 15.9081 30.3838 16.2578 30.3517L15.7565 29.8435C15.0145 29.1015 15.0145 27.8985 15.7565 27.1565C16.4985 26.4145 17.7015 26.4145 18.4435 27.1565L22.2435 30.9565C22.9855 31.6985 22.9855 32.9015 22.2435 33.6435L18.4435 37.4435C17.7015 38.1855 16.4985 38.1855 15.7565 37.4435C15.0145 36.7015 15.0145 35.4985 15.7565 34.7565L16.3612 34.1562C15.9764 34.1853 15.5891 34.2 15.2 34.2C7.16054 34.2 0.548842 27.9479 0.0316677 19.97L0.00798792 19.4893L0.000275786 19.032C-0.0174208 17.9829 0.818771 17.118 1.86796 17.1003ZM14.6435 0.556497C15.3284 1.24142 15.3811 2.31916 14.8016 3.06451L14.6435 3.2435L14.0394 3.84374C14.424 3.81464 14.8111 3.8 15.2 3.8C23.5947 3.8 30.4 10.6053 30.4 19C30.4 20.0493 29.5493 20.9 28.5 20.9C27.4507 20.9 26.6 20.0493 26.6 19C26.6 12.704 21.496 7.6 15.2 7.6C14.8446 7.6 14.4915 7.61621 14.1416 7.64835L14.6435 8.1565C15.3855 8.89849 15.3855 10.1015 14.6435 10.8435C13.9586 11.5284 12.8808 11.5811 12.1355 11.0016L11.9565 10.8435L8.1565 7.0435C7.47158 6.35858 7.41889 5.28084 7.99844 4.53549L8.1565 4.3565L11.9565 0.556497C12.6985 -0.185499 13.9015 -0.185499 14.6435 0.556497Z" fill="#191263"/>
                    </svg>
                </button>
                <Settings
                    onSelected={(e)=> onSelected(e.target.textContent)}
                    values={['Легко', 'Средне', 'Сложно',]}
                    selectedValue={complexity} 
                />
                <div  >
                  <input className={s.color} onChange={(e)=>setColor(e)} type='color'/>
                </div>
            </div>
        </header>
        </>
    )
}




export default GameCardHeader