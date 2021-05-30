import BurgerControl from "../BurgerControl/BurgerControl";

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
		<>
			<h4>{props.categoryName}</h4>
			{ingredientByCategoryArray}
		</>
	);
};

export default BurgerControlCategory;
