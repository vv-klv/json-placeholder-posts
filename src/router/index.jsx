import React from 'react';
import About from '../pages/about/About';
import Posts from '../pages/posts/Posts';
import PostPage from '../pages/postPage/PostPage';
import Login from '../pages/login/Login';

export const privateRoutes = [
    { path: '/about', element: <About /> },
    { path: '/posts', element: <Posts /> },
    { path: '/posts/:id', element: <PostPage /> }
];

export const publicRoutes = [{ path: '/login', element: <Login /> }];
