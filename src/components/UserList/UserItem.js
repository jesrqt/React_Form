import React from 'react'
import './UserItem.css'

export const UserItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id)
  };

  return (
    <li 
    className='user-item'
    onClick={deleteHandler}>
        {`${props.userName} (${props.age} years old)`}
    </li>
  )
}
