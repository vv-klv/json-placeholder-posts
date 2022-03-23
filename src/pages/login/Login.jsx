import React, { useContext } from 'react';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import cl from './Login.module.css';
import { AuthContext } from '../../context';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <div className={cl.login}>
            <h1>Страница входа</h1>
            <form onSubmit={login}>
                <Input type='text' id='login' placeholder='Введите логин' />
                <Input type='password' id='password'
                       placeholder='Введите пароль' />
                <Button style={{ width: '200px' }}>Войти</Button>
            </form>
        </div>
    );
};

export default Login;
