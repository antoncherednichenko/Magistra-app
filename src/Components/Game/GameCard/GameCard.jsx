import s from './gameCard.module.css'
import { connect } from 'react-redux'
import GameCardHeader from './GameCardHeader/GameCardHeader'
import React, { useEffect, useState } from 'react'

function GameCard({complexity, children}) {
    const[componentComplexity, setComonentComplexity] = useState(complexity)
    const changeComponentComplexity = value => setComonentComplexity(value)
    useEffect(()=>setComonentComplexity(complexity), [complexity])
    return (
        <div className={s.gameCard}>
            
            <GameCardHeader 
            complexity={componentComplexity} 
            onSelected={changeComponentComplexity}
            />
            
            {React.Children.map(children, child => {
            return React.cloneElement(child, { componentComplexity })
         })}
        </div>
    )
}

const mapStateToProps = state => ({
    gameSettings: state.gameSettings
})

export default connect(mapStateToProps)(GameCard)