import React from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();

    const onChangeSearchBarHandler = (e) => {
        const { target: { value }} = e;
        if (!value) return;

        return;
    }

    return (
        <input onChange={onChangeSearchBarHandler} placeholder="search pokemon there"></input>
    )
}

export default SearchBar;