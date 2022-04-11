import React from 'react';
import { useFirebase } from '../../hooks/useFirebase';

const Login = () => {
    const { signInGoogle } = useFirebase()
    return (
        <div>
            <fieldset>
                <legend>Login</legend>
                <form>
                    <input type="email" placeholder='Your email' required />
                    <br />
                    <input type="password" placeholder='Password' required />
                    <br />
                    <input type="submit" value="Login" />
                    <br />
                    <button onClick={signInGoogle}>Sign In Google</button>
                </form>
            </fieldset>
        </div>
    );
};

export default Login;