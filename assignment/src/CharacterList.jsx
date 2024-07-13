import { useState, useEffect } from "react";

import axios from "axios";

const CharacterList = (() => {
    const [characters, setCharacters] = useState([])

    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {

        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9f2bdcc9712879a10baec651f27ba803&hash=ecf391c316a02157106bb6aee1884771')
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        fetchCharacters()

    }, []);

    const handleClick = (character) => {
        setSelectedCharacter(character);
    };

    return (
        <div className="character-list">
            <h3>Characters</h3>
            <ul>
            {characters.map(character => (
                    <li key={character.id} onClick={() => handleClick(character)}>
                        <img src={`${character.thumbnail.path}.jpg`} alt={`${character.name} thumbnail`} />
                        <br />{character.name}
                        {selectedCharacter && selectedCharacter.id === character.id && (
                            <div className="character-details">
                                <p>{character.description || "No description available."}</p>
                                <h4>Comics:</h4>
                                <ul>
                                    {character.comics.items.map(comic => (
                                        <li key={comic.resourceURI}>{comic.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
})

export default CharacterList