import styles from './Ingredients.module.css';

function RecipeIngredients() {
    const ingredients = ["Joshinko non-glutinous rice flour", "shiratamako glutinous sweet rice flour", "powdered sugar", "hot water", "matcha powder", "pink food coloring"];

    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
           <li>{ingredients[5]}</li>
        </ul>
     </div>
    )
}

export default RecipeIngredients;