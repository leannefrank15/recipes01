import React, {useEffect, useState} from 'react'
import './App.css'
import Recipes from './Recipes';

function App() {

  //we use a recipe API from edamam to get all the recipes
  const app_id = 'c2db2b9d';
  const app_key = '28c12baa0daef0150cf24dd147638fb8';
  

  const [recipes, setRecipes] = useState([]) //here setRecipes is the update function & count is the state variable
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('') //default value of query variable is strawberry

  // eslint-disable-next-line

  useEffect(()=>{
    getRecipes();
  },[query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`)
    const finaldata=  await response.json();
    setRecipes(finaldata.hits);
    console.log(finaldata);
  }

  const updateSearch = (event_obj) => {
    setSearch(event_obj.target.value);
  }

  const getSearch = event_obj => {
    event_obj.preventDefault();
    setQuery(search);
  }



  return (
    <div className='App'>
      <h1 className="heading">Welcome to Recipes01</h1>
      <h3 style={{fontWeight: 'normal'}}>what are you lookin for today?</h3>
      <form onSubmit={getSearch} className="search-form">
        <input type='text' placeholder="search here.." className='search-bar' value={search} onChange={updateSearch}/>
        <button type='submit' className='search-button'>Go</button>
      </form>
      <div class='maincontent'>
      {recipes.map(recipe_obj => (
        <Recipes title={recipe_obj.recipe.label} cals={recipe_obj.recipe.calories}
        img={recipe_obj.recipe.image} key={recipe_obj.recipe.label} ingredients={recipe_obj.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
}

export default App;
