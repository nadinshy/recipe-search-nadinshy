function MyRecipeComponent({label, image, cuisine, ingredients, link }) {
    return(
        <div className="container">

    <div className="container-header">
    <h2>{label}</h2>
    </div>

    <div className="container-header">
    <h4>Cuisine: {cuisine}</h4>
    </div>
    
    <div className="container-recipe"> 
    <a href={link}>
    <img  src={image} alt='recipe'/> 
    </a>
    <ul className='list'>
        {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))}
    </ul>
    </div>

 
 
        </div>
    )
}

export default MyRecipeComponent;