import React from 'react'

const buttonStyle = {
    width : "200px",
    padding : "20px",
    background : "black",
    color : "white",
    fontSize : "20px",
    margin : "40px"
}

//React.memoは、property(callback)が変化したときだけcomponentを再レンダリングする
const Button = React.memo(({ callback }) => (
    //JSXをreturnする
    <button style={buttonStyle} onClick={callback}>
        {console.log("button re-rendered!")}
        Press me!
    </button>
))

export default Button