import React from 'react';

function TodoItem(props){

    const onComplete = () =>{
        alert("Ya completaste el todo " + props.text);
    }

    const onDelete = () =>{
        alert("Borraste el todo " + props.text);
    }

    return(
        <li className='todoItem'>
            <span 
                className={`icon icon-check ${props.completed && 'icon-check--active'}`}
                onClick={onComplete}
            >
            ✓
            </span>
            <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>{props.text}</p>
            <span 
                className='icon icon-delete'
                onClick={onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };