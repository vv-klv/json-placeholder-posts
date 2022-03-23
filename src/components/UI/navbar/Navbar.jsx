import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import Button from '../button/Button';
import cl from './Navbar.module.css';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };

    return (
        <header className={cl.navbar}>
            <div className={cl.navbarLinks}>
                <Link className={cl.navbarLink} to='/about'>
                    About
                </Link>
                <Link className={cl.navbarLink} to='/posts'>
                    Posts
                </Link>
            </div>
            <Button classes='inverse' onClick={logout}>
                Выйти
            </Button>
        </header>
    );
};

export default Navbar;
