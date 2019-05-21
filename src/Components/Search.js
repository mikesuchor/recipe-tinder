import React from 'react';
import './Search.css';

const Search = (props) => (
    <form className="search" onSubmit={props.getRecipe}>
        <input className="search_input" type="text" name="recipeName"></input>
        <button className="search_button">SEARCH</button>
    </form>
)

export default Search;