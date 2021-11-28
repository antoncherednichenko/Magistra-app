import s from './settings.module.css'
import'./settings.module.css'
import { useState } from 'react'



export default function Settings({values, selectedValue}) {
  const [selected, setSelected] = useState(selectedValue)
  const [isVisible, setIsVisible] = useState(false)
  const onVisible = () => setIsVisible(!isVisible)
  const onSelected = (e) => {
    setSelected(e.target.textContent)
    setIsVisible(false)
  }
    return(
       <>
       <div className={s.wrapper}>
          <button
            className={s.btn}
            type='button'
            onClick={onVisible}
           >
            {selected}
          </button>
          <ul 
            className={s.list}
            style={{display:`${isVisible?'block':'none'}`}}
          >
            {values.map((value, index)=>(
              <li className={s.item} key={index}>
                <button 
                  onClick={(e)=>onSelected(e)}
                >{value}</button>
              </li>
            ))}
          </ul>
       </div>
       </> 
    )
}