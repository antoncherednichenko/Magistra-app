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
    const [colors, setColors] = useState([
        '#FACFCA',
        '#FED385',
        '#8DDE8C',
        '#B1E9DD',
        '#FA8273'
    ])
    const [bgColor, setBgColor] = useState('#fff')
    const [isVisible, setIsVisible] = useState(false)
    const [placeholder, setPlaceholder] = useState('')
    useEffect(()=>{
        const index = randomInteger(0, names.length)
        setPlaceholder(prevPlaceholder => prevPlaceholder = names[index])
    }, [])
    const setColor = (e) => {
        e.stopPropagation()
        const currentColor = e.currentTarget.style.backgroundColor
        setBgColor(prev => prev = currentColor)
        setIsVisible(prev=>prev=!prev)
    }
    return(
        <>
        <header style={{backgroundColor: `${bgColor}`}} className={s.gameCardHeader}>
            <div className={s.wrapper}>
                <input className={s.namePlace} placeholder={placeholder}/>
                <Settings
                    gameSettings={gameSettings}
                    settings={['Легко', 'Средне', 'Сдожно']} 
                />
                <div onClick={()=>setIsVisible(prev=>prev=!prev)} className={s.setColor}>
                    <div style={{display: `${isVisible? 'block': 'none'}`}} className={s.colorBox}>
                        {colors.map((color, index) => (
                            <div
                            onClick={(e)=>setColor(e)}
                            key={index}
                            className={s.color}
                            style={{backgroundColor:`${color}`}}
                            ></div>
                        ))}
                    </div>
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