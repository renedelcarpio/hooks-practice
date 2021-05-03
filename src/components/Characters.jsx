import React, { useState, useEffect } from 'react'

function Characters() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then( data => setCharacters(data.results))
    }, [])

    return (
        <div className='characters'>
            {characters.map(character => (
                <>
                <img src={character.image} alt=""/>
                <h2>{ character.name }</h2>
                </>
            ))}
        </div>
    )
}

export default Characters
