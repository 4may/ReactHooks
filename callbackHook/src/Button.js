import React, { useState } from 'react'

const Button = () => {
    const genRandom = () => {
        return Math.floor(Math.random() * 10)
    }
    
    const [state, setState] = useState({
        random : genRandom()
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(state.random)
        setState(prevState => ({random : genRandom()}))
        console.log("hello")
    }

    //JSXをreturnする
    return(
        <React.Fragment>
            <p>The random number is: {state.random}</p>
            <form onSubmit={handleSubmit}>
                <button>Press me!</button>
            </form>
        </React.Fragment>
    )
}

export default Button