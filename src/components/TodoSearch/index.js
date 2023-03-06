import React from 'react';

function TodoSearch({ searchValue, setSearchValue }){

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }

    return(
        <input
            className='todoSearch' 
            placeholder='Buscar...'
            value={searchValue}
            onChange={onSearchValueChange}
        ></input>
        );
}

export { TodoSearch };