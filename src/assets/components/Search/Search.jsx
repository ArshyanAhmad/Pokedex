import React from 'react'
import './search.css'

function Search() {
    return (
        <div className='search-wrapper'>
            <input
                className='input'
                type="text"
                placeholder='Pokemon name'
            />
        </div>
    )
}

export default Search
