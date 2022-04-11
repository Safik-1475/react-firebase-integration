import React from 'react';

const Register = () => {
    return (
        <div>
            <fieldset>
                <legend>Register now</legend>
                <form >
                    <input type="text" placeholder='Your name' required />
                    <br />
                    <input type="tel" placeholder='Your phone number' required />
                    <br />
                    <input type="email" placeholder='Your email' required />
                    <br />
                    <input type="password" placeholder='Password' required />
                    <br />
                    <input type="password" placeholder='Re-Type Password' required />
                    <br />
                    <input type="submit" value="Register" />
                    <br />
                    <input type="submit" value="Or sign In With Google" />

                </form>
            </fieldset>

        </div>
    );
};

export default Register;