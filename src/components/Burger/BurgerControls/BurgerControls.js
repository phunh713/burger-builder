import { useEffect, useState } from "react";
import BurgerIngredientList from "../BurgerIngredient/IngredientList";
import BurgerControlCategory from "./BurgerControlCategory/BurgerControlCategory";
import classes from "./BurgerControls.module.css";

const BurgerControls = (props) => {
	const [categoryArray, setCategoryArray] = useState([]);
	const [activeCategory, setActiveCategory] = useState(categoryArray[0]);

	useEffect(() => {
		let array = [];
		for (let ingredient of BurgerIngredientList) {
			if (ingredient.type === "Bread") continue;
			let index = array.findIndex((category) => category === ingredient.type);
			if (index === -1) array.push(ingredient.type);
		}
		setCategoryArray(array);
		setActiveCategory(array[0]);
	}, []);

	const getCategoryArrayByType = (type) => {
		return BurgerIngredientList.filter((ingredient) => ingredient.type === type);
	};

	return (
		<div className={classes.BurgerControls}>
			<div className={classes["ingredient-types"]}>
				{categoryArray.map((category) => (
					<div
						key={category}
						className={activeCategory === category ? classes.active : ""}
						onClick={() => setActiveCategory(category)}
					>
						{category}
					</div>
				))}
			</div>
			<BurgerControlCategory
				key={activeCategory}
				categoryName={activeCategory}
				ingredientByCategoryArray={getCategoryArrayByType(activeCategory)}
				onAdd={props.onAdd}
				onRemove={props.onRemove}
				selectedIngredients={props.selectedIngredients}
			/>
			<div className={classes.ButtonWrapper}>
				{props.isDoneBuilding ? (
					<>
						<button onClick={() => props.onRemove("Bread Top")}>Edit</button>
						<button onClick={props.onCheckout}>Checkout</button>
					</>
				) : (
					<button onClick={() => props.onAdd("Bread Top")}>Done</button>
				)}
			</div>
		</div>
	);
};

export default BurgerControls;
