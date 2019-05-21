import React from 'react';
import Header from './Header';
import RecipeContainer from './RecipeContainer';
import Search from './Search';
import './App.css';

/*
Search Parameters:
key: API Key
q: (optional) Search Query (Ingredients should be separated by commas). If this is omitted top rated recipes will be returned.
sort: (optional) How the results should be sorted. See Below for details.
page: (optional) Used to get additional results

Recipe Parameters:
key: API Key
rId: Id of desired recipe as returned by Search Query
*/

const apiKey = "f653f67522513510e20a1928507fbe51";
const searchUrl = "https://www.food2fork.com/api/search";
const recipeUrl = "https://www.food2fork.com/api/get";

class App extends React.Component {
  state = {
    recipes: []
  }

  getRecipe = async (event) => {
    event.preventDefault();
    const recipeName = event.target.elements.recipeName.value;
    const apiCall = await fetch(`${searchUrl}?key=${apiKey}&q=${recipeName}`);
    const data = await apiCall.json();
    this.setState({recipes: data.recipes});
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Search getRecipe={this.getRecipe}/>
        <RecipeContainer recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
