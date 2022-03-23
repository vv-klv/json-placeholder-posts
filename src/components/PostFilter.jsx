import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Select
                value={ filter.sort }
                onChange={ (selectedSort) => setFilter({
                    ...filter,
                    sort: selectedSort
                }) }
                defaultValue='Сортировка'
                options={ [
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ] }
            />
            <Input
                value={ filter.query }
                onChange={ (e) => setFilter({
                    ...filter,
                    query: e.target.value
                }) }
                placeholder='Поиск'
            />
        </div>
    );
};

export default PostFilter;
