import React from 'react';
import {Link} from 'react-router-dom';
import './Recipe.css';

const Recipe = (props) => (
    <div className="recipe">
        <img className="recipe_image" src={props.recipe.image_url} alt={props.recipe.title}></img>
        <p className="recipe_title">{props.recipe.title}</p>
            <button className="recipe_button">
                <Link to={{
                    pathname: `/recipe/${props.recipe.recipe_id}`,
                    state: {
                        recipe: props.recipe.recipe_id
                    }    
                }}>View Recipe</Link>
            </button>
        
    </div>
)

export default Recipe;