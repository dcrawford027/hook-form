import React, { useState } from 'react';

const Display = props => {
    const {firstName, lastName, email, password, confirm} = props;
    return (
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm: {confirm}</p>
        </div>
    );
}

export default Display;