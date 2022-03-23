import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { privateRoutes, publicRoutes } from '../router/index';
import { AuthContext } from '../context';

import Login from '../pages/login/Login';
import Posts from '../pages/posts/Posts';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <Loader />;
    }

    return isAuth
        ? <Routes>
            {privateRoutes.map((route) =>
                <Route
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />
            )}
            <Route
                path='*'
                element={<Posts />}
            />
        </Routes>
        : <Routes>
            {publicRoutes.map((route) =>
                <Route
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />
            )}
            <Route
                path='*'
                element={<Login />}
            />
        </Routes>
        ;
};

export default AppRouter;
