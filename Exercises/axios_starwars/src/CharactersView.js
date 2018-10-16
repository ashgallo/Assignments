import React from 'react';

import Loading from "./Loading";
import ErrorHandler from "./ErrorHandler";
import CharacterList from './CharacterList';

function CharactersView({ loading, err, characters }) {
    return (
        <Loading loading={loading}>
            <ErrorHandler err={err}>
                <CharacterList characters={characters}/>
            </ErrorHandler>
        </Loading>
    )
}

export default CharactersView


