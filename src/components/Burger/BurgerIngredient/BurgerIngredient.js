import classes from "./BurgerIngredient.module.css";
import ingredients from "./IngredientList";

const BurgerIngredient = (props) => {
	const theIngredient = ingredients.find((ingredient) => ingredient.name === props.type);
	if (theIngredient) {
		return (
			<img
				className={classes.Ingredient}
				alt={props.type}
				src={theIngredient.imgUrl}
				style={{ bottom: props.fromBottom + "px" }}
			/>
		);
	} else {
        return null
    }
};

export default BurgerIngredient;
