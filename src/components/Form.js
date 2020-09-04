import React, { useState } from 'react';
import Display from './Display';

const Form = props => {
    const [event, setEvent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: ''
    })

    const changeHandler = e => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        })
    }

    const createUser = e => {
        e.preventDefault();
        const newUser = {  };
        console.log("Created new user!");
    }

    return (
        <>
            <form onSubmit={createUser}>
                <div className="mb-10">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" onChange={ changeHandler } value={event.firstName}/>
                </div>
                <div className="mb-10">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onChange={ changeHandler } value={event.lastName}/>
                </div>
                <div className="mb-10">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={ changeHandler } value={event.email}/>
                </div>
                <div className="mb-10">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" onChange={ changeHandler } value={event.password}/>
                </div>
                <div className="mb-10">
                    <label htmlFor="confirm">Confirm</label>
                    <input type="text" name="confirm" onChange={ changeHandler } value={event.confirm}/>
                </div>
                <div className="mb-10">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <Display firstName={event.firstName} lastName={event.lastName} email={event.email} password={event.password} confirm={event.confirm}/>
        </>
    );
}

export default Form;