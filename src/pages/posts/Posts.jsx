import React, { useEffect, useRef, useState } from 'react';
import PostService from '../../API/PostService';
import { getPageCount } from '../../utils/pages';
import { useFetching } from '../../components/hooks/useFetching';
import { usePosts } from '../../components/hooks/usePosts';
import PostFilter from '../../components/PostFilter';
import PostForm from '../../components/PostForm';
import PostList from '../../components/PostList';
import Button from '../../components/UI/button/Button';
import Modal from '../../components/UI/modal/Modal';
import Loader from '../../components/UI/loader/Loader';
import Pagination from '../../components/UI/pagination/Pagination';

import cl from './Posts.module.css';
import { useObserver } from '../../components/hooks/useObserver';
import Select from '../../components/UI/select/Select';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(
        async (limit, page) => {
            const response = await PostService.getAll(limit, page);
            setPosts([...posts, ...response.data]);
            const totalCount = response.headers['x-total-count'];
            setTotalPages(getPageCount(totalCount, limit));
        }
    );

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
    };

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    useObserver(
        lastElement,
        page < totalPages,
        isPostsLoading,
        () => setPage(page + 1)
    );


    return (
        <div className={cl.posts}>
            <Modal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost} />
            </Modal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <Select
                value={limit}
                onChange={(value) => setLimit(value)}
                defaultValue='Показать ...'
                options={[
                    { value: 10, name: 'по 10 постов' },
                    { value: 25, name: 'по 25 постов' },
                    { value: -1, name: 'Все' },
                ]}
            />
            <Button
                onClick={() => setModal(true)}
            >
                Создать пост
            </Button>
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title='Посты'
            />
            <div ref={lastElement} style={{ height: 1 }} />
            { isPostsLoading && <Loader />}
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
            { postError && <h1 style={{ textAlign: 'center' }}>
                               Произошла ошибка {postError}
                           </h1>
            }
        </div>
    );
}

export default Posts;
