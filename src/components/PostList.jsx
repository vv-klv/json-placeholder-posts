import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';
import cl from '../pages/posts/Posts.module.css';

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;
    }

    return (
        <div style={{ marginBottom: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition key={post.id} timeout={500}
                                   classNames={cl.posts}>
                        <PostItem remove={remove} number={index + 1}
                                  post={post} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
