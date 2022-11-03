
import './App.css';
import { useEffect, useState } from 'react';
import video from './plate.mp4';
import icon from './cook.png';
import MyRecipeComponent from './MyRecipeComponent';



function App() {

const MY_ID = "debedadb";
const MY_KEY = "15bb3602ec9866f0467f4415cf6b8aa1";

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState ([]);

const [wordSubmitted, setWordSubmitted] = useState('beef');

useEffect (() => {
  const getRecipe = async () => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    setMyRecipes(data.hits);
  }
  getRecipe();
},[wordSubmitted])

const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault(); 
  setWordSubmitted(mySearch); 
}

  return (
    <div className="App">
     <div className='container'>
     <video autoPlay muted loop>
      <source src={video} type="video/mp4"/>
      </video>
      <h1>Recipe Search</h1>
     </div>

    <div className='container'>
      <form onSubmit={finalSearch}>
        <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
        </input>
    <button>
      <img src={icon} className='icon' alt='icon'/>
    </button>
      </form>
    </div>


  <div>
    {myRecipes.map((element, index) => (
      <MyRecipeComponent key={index}
      label = {element.recipe.label}
      image = {element.recipe.image}
      cuisine = {element.recipe.cuisineType}
      ingredients = {element.recipe.ingredientLines}
      link = {element.recipe.url}
      />
    ))}
  </div>
    </div>
  );
}

export default App;

