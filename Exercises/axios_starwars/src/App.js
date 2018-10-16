import React from 'react'
import Characters from "./Characters";
import CharactersView from './CharactersView';

function App() {
    return (
        <div>
            <Characters render={CharactersView} />
        </div>
    )
}

export default App
