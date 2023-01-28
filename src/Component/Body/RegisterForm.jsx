import React from 'react';
import style from './RegisterForm.css';

function RegisterForm(props) {
    return (
        <div className='RegisterForm'>
            <h1>  Save time, save money!</h1>
            <p>Sign up and we'll send the best deals to you</p>
<div className="input Email">
    <input type="text" placeholder="Your Email"></input>
    <button type="submit" className="submit"> Subcribe</button>
</div>
        </div>
    )
}

export default RegisterForm;