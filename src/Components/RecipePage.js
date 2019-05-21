import React from 'react';

const apiKey = "f653f67522513510e20a1928507fbe51";
const searchUrl = "https://www.food2fork.com/api/search";
const recipeUrl = "https://www.food2fork.com/api/get";

class RecipePage extends React.Component {
    state = {
        activeRecipe: []
    }
    
    componentDidMount = async () => {
        const recipeId = this.props.location.state.recipe;
        console.log(recipeId);
        const apiCall = await fetch(`${recipeUrl}?key=${apiKey}&rId=${recipeId}`);
        const data = await apiCall.json();
        this.setState({activeRecipe: data});
    }

    render() {
        const recipe = this.state.activeRecipe.recipe;
        return(
            <div>
                {console.log(recipe.image_url)}
                <img src={recipe.image_url} alt={recipe.title}></img>
                <h2>{recipe.title}</h2>

            </div>
        )
    }
}

export default RecipePage;