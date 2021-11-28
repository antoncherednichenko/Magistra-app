import s from './gameCardHeader.module.css'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Settings from '../../../Settings/Settings'

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

function GameCardHeader({gameSettings, backgoundColor, pushColor}) {
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
        setPlaceholder(prevPlaceholder => prevPlaceholder = names[index])
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
                    values={['Легко', 'Средне', 'Сложно',]}
                    selectedValue={gameSettings.complexity === 1?'Легко':gameSettings.complexity === 2?'Средне':'Сложно'} 
                />
                <div  >
                  <input className={s.color} onChange={(e)=>setColor(e)} type='color'/>
                </div>
            </div>
        </header>
        </>
    )
}

const mapStateToProps = state => ({
    gameSettings: state.gameSettings,
    backgoundColor: state.backgoundColor
})


export default connect(mapStateToProps)(GameCardHeader)