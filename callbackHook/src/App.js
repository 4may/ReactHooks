import React, { useState } from 'react'

import Button from './Button'

const App = () => {
    const genRandom = () => {
        return Math.floor(Math.random() * 10)
    }

    const initRandom = genRandom()
    const [appText, setAppText] = useState(initRandom)

    const appStyles = {
        background : "white",
        margin : "40px",
        textAlign : "center",
        fontSize : "40px"
    }

    //これだと、呼び出されるたびに関数が生成されてしまうため、非効率
    const btnCallback = e => {
        console.log("click")
        const random = genRandom()
        setAppText(random)
    }

    return(
        <div style={appStyles}>
            <div>The random number is: {appText}</div>
            <Button callback={btnCallback}/>
        </div>
    )
}

export default App