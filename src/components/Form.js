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
                    {
                        event.firstName.length < 2 ? 
                            <p style={{color: 'red'}}>Must be at least 2 characters</p> :
                            ''
                    }
                </div>
                <div className="mb-10">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onChange={ changeHandler } value={event.lastName}/>
                    {
                        event.lastName.length < 2 ? 
                            <p style={{color: 'red'}}>Must be at least 2 characters</p> :
                            ''
                    }
                </div>
                <div className="mb-10">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={ changeHandler } value={event.email}/>
                    {
                        event.email.length < 5 ? 
                            <p style={{color: 'red'}}>Must be at least 5 characters</p> :
                            ''
                    }
                </div>
                <div className="mb-10">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" onChange={ changeHandler } value={event.password}/>
                    {
                        event.password.length < 8 ? 
                            <p style={{color: 'red'}}>Must be at least 8 characters</p> :
                            ''
                    }
                </div>
                <div className="mb-10">
                    <label htmlFor="confirm">Confirm</label>
                    <input type="text" name="confirm" onChange={ changeHandler } value={event.confirm}/>
                    {
                        event.confirm.length < 8 ? 
                            <p style={{color: 'red'}}>Must be at least 8 characters</p> :
                            ''
                    }
                    {
                        event.password != event.confirm ?
                            <p style={{color: 'red'}}>Passwords do not match.</p> :
                            ''
                    }
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