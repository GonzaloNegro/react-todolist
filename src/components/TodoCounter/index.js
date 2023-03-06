import React from 'react';

function TodoCounter({ total, completed }){
    return(
        <h2 className='todoCounter'>Has completado {completed} de {total} TODO</h2>
    );
}

export { TodoCounter };