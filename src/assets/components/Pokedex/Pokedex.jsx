import React from 'react'
import './pokedex.css'
import Search from '../Search/Search'
import Pokemon from '../Pokemon/Pokemon'

function Pokedex() {
    return (
        <div className='pokedex-wrapper'>
            <h1 className='heading'>Pokedex</h1>
            <Search />
            <Pokemon />
        </div>
    )
}

export default Pokedex
