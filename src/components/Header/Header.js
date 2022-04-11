import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user } = useFirebase()
    return (
        <nav className='navigation'>
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'orders'}>Order</Link>
            {user?.uid ? <button>Sign Out</button> :
                <Link className='nav-link' to={'login'}>Login</Link>
            }
            <Link className='nav-link' to={'Register'}>Register</Link>
        </nav>
    );
};

export default Header;