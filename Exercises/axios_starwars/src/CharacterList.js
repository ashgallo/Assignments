import React from 'react'
import Character from './Character';

function CharacterList({ characters }) {
    const characterComponents = characters.map((character, i) => (
        <Character key={i} {...character} />
    ))
    return (
        <div>
            {characterComponents}
        </div>
    )
}

export default CharacterList
