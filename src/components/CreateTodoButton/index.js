import React from 'react';

function CreateTodoButton(){

    const onClickButton = (msg) => {
        alert(msg);
    }

    return(
        <button 
        className='createTodoButton' 
        onClick={() => onClickButton("Aqui deberia abrir el modal")}
        >+</button>
    );
}

export { CreateTodoButton };