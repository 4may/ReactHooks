import React, { useState, useCallback } from 'react'

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

    //useCallbackでラップされていない場合、呼び出されるたびに関数が生成されてしまうため、無駄なレンダリングが発生することになる。
    //useCallback()でラップすることで、一度定義された関数を使い回すことができる。
    //ただし、関数内部で状態を保存している場合は、使い回すべきではないため、useCallbackは使えない。
    const btnCallback = useCallback(e => {
        console.log("click")
        const random = genRandom()
        setAppText(random)
    }, [])

    return(
        <div style={appStyles}>
            <div>The random number is: {appText}</div>
            <Button callback={btnCallback}/>
        </div>
    )
}

export default App