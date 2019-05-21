import React from 'react';
import Recipe from './Recipe';
import './RecipeContainer.css';

const RecipeContainer = (props) => (
    <div className="recipe_container">
        {props.recipes.map((recipe) => {
            return(
                <Recipe recipe={recipe} key={recipe.recipe_id} />
            )
        })}
    </div>
)

export default RecipeContainer;