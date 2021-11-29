import s from './gameCardHeader.module.css'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Settings from '../../../Settings/Settings'


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

function GameCardHeader({complexity}) {
    const names = [
        'Месье Колбасье ', 
        'Кабачок', 
        'Хомячок', 
        'Пупсяндра', 
        'Капитошка',
        'Живжик',
        ]
    const [componentComplexity, setComponentComplexity] = useState(complexity)
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
                <Settings
                    onSelected={(e)=> console.log(e)}
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