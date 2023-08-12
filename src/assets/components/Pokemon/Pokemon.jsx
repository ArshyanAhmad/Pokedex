import React from 'react'
import axios, { all } from 'axios'
import { useEffect, useState } from 'react'
import './pokemon.css'
import ShowPokemons from '../ShowPokemons/ShowPokemons'

function Pokemon() {

    const [isLoading, setIsLoading] = useState(true)
    const [Pokemons, setPokemons] = useState([])
    const [Limit, setLimit] = useState(20)
    const [Offset, setOffset] = useState(0)

    async function fetchPokeData() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${Offset}&limit=${Limit}`)
        const responseResult = response.data.results;
        console.log(responseResult);

        const allPokemon = responseResult.map(async (pokemon) => axios.get(pokemon.url))
        const resultAllPokemon = await axios.all(allPokemon)
        console.log('Result Pokemo', resultAllPokemon);

        const results = resultAllPokemon.map((poke) => {
            const pokemon = poke.data;
            return {
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                id: pokemon.id,
            }
        })

        setPokemons(results)
        console.log('results', results);
    }

    useEffect(() => {
        fetchPokeData()
        setIsLoading(false)
    }, [Limit])

    function morePokemons() {
        setLimit(Limit + 20)
    }

    return (
        <>
            <div className='pokemon-wrapper'>
                {
                    isLoading
                        ? "Loading...."
                        : Pokemons.map((p) => {
                            return (
                                <ShowPokemons name={p.name} key={p.id} image={p.image} />
                            )
                        })
                }

            </div>

            <div className="button-wrapper">
                <button onClick={morePokemons} className='btn'>Load More</button>
            </div>
        </>

    )
}

export default Pokemon
