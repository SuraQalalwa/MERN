import React from 'react'

const Display = (props) => {
    return (
    <div>
        <h1 style={{backgroundColor:props.color1, color:props.color2}}>{isNaN(props.word)?"The World is:"+(props.word):"The number is:"+(props.word)}</h1>
    </div>
    )
}

export default Display
