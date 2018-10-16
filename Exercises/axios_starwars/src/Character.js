import React from 'react'

function Character({name, gender, eye_color}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Eye Color: {eye_color}</p>
            <p>Gender: {gender}</p>
        </div>
    )
}

export default Character
