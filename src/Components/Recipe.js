import React from 'react';
import './Recipe.css';

const Recipe = (props) => (
    <div className="recipe">
        <img className="recipe_image" src={props.recipe.image_url} alt={props.recipe.title}></img>
        <p className="recipe_title">{props.recipe.title}</p>
        <form className="recipe_form" action={props.recipe.f2f_url}>
            <button className="recipe_button" type="submit">
                VIEW RECIPE
            </button>
        </form>
    </div>
)

export default Recipe;