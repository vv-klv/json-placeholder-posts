import React, { useEffect, useState } from 'react';
import { Routes, useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import { useFetching } from '../../components/hooks/useFetching';
import Loader from '../../components/UI/loader/Loader';
import cl from './PostPage.module.css';

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isPostLoading, error] = useFetching(async (id) => {
        const response = await PostService.getPostById(id);
        setPost(response.data);
    });
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(
        async (id) => {
            const response = await PostService.getCommentsByPostId(id);
            setComments(response.data);
        }
    );
    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div className={cl.postPage}>
            { isPostLoading
                ? <Loader />
                : <div className={cl.postContent}>
                    <h2 className={cl.postTitle}>
                        <b>{post.id}.</b> {post.title}
                    </h2>
                    <div className={cl.postBody}>
                        {post.body}
                    </div>
                </div>
            }

            { isCommentsLoading
                ? <Loader />
                : <div>
                    <h2>Комментарии</h2>
                    {comments.map((comm) =>
                        <div className={cl.comment} key={comm.id}>
                            <h5 className={cl.commentMail}>{comm.email}</h5>
                            <div className={cl.commentContent}>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostPage;
