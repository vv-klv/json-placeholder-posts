import './styles/App.css';
import React, { useEffect } from 'react';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { useState } from 'react/cjs/react.development';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    return (
        <div className='App'>
            <AuthContext.Provider
                value={{
                    isAuth,
                    setIsAuth,
                    isLoading,
                    setLoading,
                }}
            >
                <Navbar />
                <AppRouter />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
