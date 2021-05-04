import React, { useState, useEffect } from 'react'

import '../styles/Characters.css'

function Characters() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then( data => setCharacters(data.results))
    }, [])

    return (
        <div className='all__characters-container'>
            {characters.map(character => (
                <div className='character'>
                    <div className='character-image'>
                        <img className='image' src={character.image} alt="Rick and Morty's Character" loading='lazy'/>
                    </div>
                    <div className='character-info'>
                        <h1>{ character.name }</h1>
                        <h4>Especie:</h4>
                        <h2>{ character.species }</h2>
                        <h4>Género:</h4>
                        <h2>{ character.gender }</h2>
                        <h4>Estado:</h4>
                        <h2>{ character.status }</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Characters
