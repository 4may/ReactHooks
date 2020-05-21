import React from 'react'

const buttonStyle = {
    width : "200px",
    padding : "20px",
    background : "black",
    color : "white",
    fontSize : "20px",
    margin : "40px"
}

const Button = ({ callback }) => (
    //JSXをreturnする
    <button style={buttonStyle} onClick={callback}>
        {console.log("button re-rendered!")}
        Press me!
    </button>
)

export default Button