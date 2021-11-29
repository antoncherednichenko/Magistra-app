import s from './settings.module.css'
import'./settings.module.css'
import { useState } from 'react'



export default function Settings({values, selectedValue, onSelected}) {
  const [selected, setSelected] = useState(selectedValue)
  const [isVisible, setIsVisible] = useState(false)
  const onVisible = () => setIsVisible(!isVisible)
  const handleClick = e => {
    setIsVisible(false)
    setSelected(e.target.textContent)
    onSelected(e)
  }
    return(
       <>
       <div className={s.wrapper}>
          <button
            className={s.btn}
            type='button'
            onClick={onVisible}
           >
            {selectedValue}
          </button>
          <ul 
            className={`${s.list} ${isVisible && s.active}`}
          >
            {values.map((value, index)=>(
              <li className={s.item} key={index}>
                <button 
                  onClick={(e)=>handleClick(e)}
                >{value}</button>
              </li>
            ))}
          </ul>
       </div>
       </> 
    )
}