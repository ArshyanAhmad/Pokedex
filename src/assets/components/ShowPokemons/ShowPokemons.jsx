import React from 'react'
import './DisplayPokemon.css'

function ShowPokemons({ name, image }) {
    return (
        <div className='showPokemons-wrapper'>
            <h3 className='poke-name'>{name}</h3>
            <img
                className='poke-image'
                src={image ? image : { name }}
                alt="" />
        </div>
    )
}

export default ShowPokemons
