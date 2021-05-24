import BurgerIngredientList from "../BurgerIngredient/IngredientList";
import BurgerControlCategory from "./BurgerControlCategory/BurgerControlCategory";
import classes from "./BurgerControls.module.css";
import Aux from "../../../hoc/Auxiliary";

const BurgerControls = (props) => {
	let categoryArray = [];
	for (let ingredient of BurgerIngredientList) {
		let index = categoryArray.findIndex((category) => category === ingredient.type);
		if (index === -1) categoryArray.push(ingredient.type);
	}

	const getCategoryArrayByType = (type) => {
		return BurgerIngredientList.filter((ingredient) => ingredient.type === type);
	};

	const burgerControlCategoryArray = categoryArray
		.filter((category) => category !== "Bread") //Remove Type Bread out of Array
		.map((category) => (
			<BurgerControlCategory
				key={category}
				categoryName={category}
				ingredientByCategoryArray={getCategoryArrayByType(category)}
				onAdd={props.onAdd}
				onRemove={props.onRemove}
				selectedIngredients={props.selectedIngredients}
			/>
		));

	return (
		<div className={classes.BurgerControls}>
			{burgerControlCategoryArray}
			<div className={classes.ButtonWrapper}>
				{props.isDoneBuilding ? (
					<Aux>
						<button onClick={() => props.onRemove("Bread Top")}>Edit</button>
						<button onClick={props.onCheckout}>Checkout</button>
					</Aux>
				) : (
					<button onClick={() => props.onAdd("Bread Top")}>Done</button>
				)}
			</div>
		</div>
	);
};

export default BurgerControls;
