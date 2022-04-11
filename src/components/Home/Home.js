import React from 'react';
import { useFirebase } from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase()
    console.log(user)
    return (
        <div>
            <h2>This Current User : {user ? user.displayName : 'no body here'}</h2>
            <h2>This Email User : {user ? user.email : 'No user email'}</h2>
        </div>
    );
};

export default Home;