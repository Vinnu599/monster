import React from 'react';

import '../search-box/search-box.styles.css';

export const SearchBox = ({Placeholder, handleChange}) => (
    <input type='search'
        className="search"
        placeholder={Placeholder}
        onChange={handleChange}
    />
);