import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import cl from './Pagination.module.css';

const Pagination = ({ totalPages, page, changePage }) => {
    const pagesArray = getPagesArray(totalPages);

    return (
        <div className={cl.pagination}>
            {pagesArray.map((p) => (
                <div
                    onClick={() => changePage(p)}
                    key={p}
                    className={
                        page === p
                            ? `${cl.paginationItem} + 
                               ${cl.paginationItemActive}`
                            : cl.paginationItem
                    }
                >
                    {p}
                </div>
            ))}
        </div>
    );
};

export default Pagination;
