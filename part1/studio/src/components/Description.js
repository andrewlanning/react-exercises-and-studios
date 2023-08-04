import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    const authorLink = "https://www.instagram.com/simplyhomecooked/";
    const authorPhoto = "https://simplyhomecooked.com/wp-content/uploads/2018/10/dina-125.png";
    const authorName = "Dina";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Dina from Simply Homecooked." className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Simply Homecooked</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Easy Dango Recipe</h1>
                    <p>Firm colorful riceballs that are sweet and chewy!</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;