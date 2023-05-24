import React from 'react'
import './Alert.css'

export const Alert = (props) => {

    const errorMessageHandler = () => {
        props.onErrorEscape()
    };

    return (
        <div 
        className='overlay'
        onClick={errorMessageHandler}>
            <div className='alert-container'>
                <div className="alert-title">
                    <h1>Invalid input</h1>
                </div>
                <div className='alert-message'>
                    {props.errorMessage.map(message => <p key={Math.random()}>{message}</p>)}
                    <button onClick={errorMessageHandler}>OK</button>
                </div>
            </div>
        </div>
    )
}
