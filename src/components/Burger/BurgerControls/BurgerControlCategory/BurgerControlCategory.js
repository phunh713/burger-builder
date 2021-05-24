import BurgerControl from "../BurgerControl/BurgerControl";
import Aux from "../../../../hoc/Auxiliary";

const BurgerControlCategory = (props) => {
	const getAmount = (ingredientName) => {
		return props.selectedIngredients.filter((selectedIngredient) => selectedIngredient === ingredientName).length;
	};
	const ingredientByCategoryArray = props.ingredientByCategoryArray.map((ingredient) => (
		<BurgerControl
			key={ingredient.name}
			ingredientName={ingredient.name}
			price={ingredient.price}
			amount={getAmount(ingredient.name)}
			onAdd={() => props.onAdd(ingredient.name)}
			onRemove={() => props.onRemove(ingredient.name)}
		/>
	));
	return (
		<Aux>
			<h4>{props.categoryName}</h4>
			{ingredientByCategoryArray}
		</Aux>
	);
};

export default BurgerControlCategory;
