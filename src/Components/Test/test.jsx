import React, { useCallback, useState} from "react"

 function Test({text}) {
    console.log('render')
    return (
        <>
            <p>{text}</p>
        </>
    )
}

Test = React.memo(Test)

export default function TestContainer() {
    
    const[count, setCount] = useState(0)
    const sayHello = useCallback(() => console.log('Hello!'), [])
    return(
        <>
        <Test text='asdwerwersadafs' onSay={sayHello}/>
        <Test text='asdwerwersadafs' onSay={sayHello}/>
        <Test text='asdwerwersadafs' onSay={sayHello}/>
        <Test text='asdwerwersadafs' onSay={sayHello}/>
        <Test text='asdwerwersadafs' onSay={sayHello}/>
        <Test text='asdwerwersadafs' onSay={sayHello}/>
        <button onClick={()=>setCount(count + 1)}>click</button>
        </>
    )
}

 