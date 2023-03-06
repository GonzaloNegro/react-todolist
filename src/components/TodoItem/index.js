import React from 'react';

function TodoItem(props){

    return(
        <li className='todoItem'>
            <span 
                className={`icon icon-check ${props.completed && 'icon-check--active'}`}
                onClick={props.onComplete}
            >
            ✓
            </span>
            <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>{props.text}</p>
            <span 
                className='icon icon-delete'
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };