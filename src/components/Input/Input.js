import React from 'react'
import './Input.css';
import { useState } from 'react';

export const Input = props => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const changeUserNameHandler = (event) => {
        setEnteredUserName(event.target.value)
    };

    const changeAgeHandler = (event) => {
        setEnteredAge(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        //You can check if the values are valid here with if statement
        props.onSubmit(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    return (
        <div>
            <form 
            className='form'
            onSubmit={submitHandler}>
                <label htmlFor="username" >Username</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUserName}
                    onChange={changeUserNameHandler}
                    />

                <label htmlFor="age" >Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    value={enteredAge}
                    onChange={changeAgeHandler}/>

                <button type="submit">Add User</button>
            </form>
        </div>
    )
}
