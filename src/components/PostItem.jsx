import React from 'react';
import Button from './UI/button/Button';
import cl from '../pages/posts/Posts.module.css';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate();

    return (
        <div className={cl.postItem}>
            <div className={cl.postContent}>
                <strong className={cl.postTitle}>
                    {props.post.id}.{' ' + props.post.title}
                </strong>
                <div className={cl.postBody}>{props.post.body}</div>
            </div>
            <div className={cl.postBtns}>
                <Button onClick={() => router(`/posts/${props.post.id}`)}>
                    Открыть
                </Button>
                <Button onClick={() => props.remove(props.post)}>
                    Удалить
                </Button>
            </div>
        </div>
    );
};

export default PostItem;
