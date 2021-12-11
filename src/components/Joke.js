import React from "react"

function Joke(props) {
    const style= {backgroundColor: "RGBA(196,83,80,0.3)"}
    return (
        <div>
            <hr/>
            <br/>
            <h2 style={style}> Question: {props.question}</h2>
            <h2>Answer: {props.answer}</h2>
            <br/>
            <hr/>
        </div>
    )
}

export default Joke