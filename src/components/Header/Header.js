import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <nav className='navigation'>
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'orders'}>Order</Link>
            <Link className='nav-link' to={'Register'}>Register</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid ? <button onClick={handleSignOut}>Sign Out</button> : <Link className='nav-link' to={'login'}>Login</Link>
            }

        </nav>
    );
};

export default Header;