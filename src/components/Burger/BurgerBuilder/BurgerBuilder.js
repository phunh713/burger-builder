import React, { useState } from "react";
import BurgerVisual from "../BurgerVisual/Burger";
import BurgerControls from "../BurgerControls/BurgerControls";
import BurgerCheckout from "../BurgerCheckout/BurgerCheckout";

const BurgerBuilder = () => {
	const [ingredients, setIngredients] = useState(["Bread Bottom"]);
	const [isChecking, setIsChecking] = useState(false);
	const [isDoneBuilding, setIsDoneBuilding] = useState(false);

	const handleAddIngredient = (ingredient) => {
		if (ingredients.indexOf("Bread Top") === -1) {
			setIngredients((prev) => [...prev, ingredient]);
		}
		if (ingredient === "Bread Top") {
			console.log(ingredient);
			setIsDoneBuilding(true);
		}
	};

	const handleRemoveIngredient = (ingredient) => {
		if (ingredients.indexOf("Bread Top") === -1 || ingredient === "Bread Top") {
			let newIngredients = ingredients;
			const index = newIngredients.lastIndexOf(ingredient);
			if (index !== -1) newIngredients.splice(index, 1);

			setIngredients(newIngredients);
		}

		if (ingredient === "Bread Top") {
			console.log(ingredient);
			setIsDoneBuilding(false);
		}
	};

	const handleCheckout = () => {
		setIsChecking(true);
	};

	const handleCancelCheckout = () => {
		console.log("hello");
		setIsChecking(false);
	};

	return (
		<>
			<BurgerVisual ingredients={ingredients} />
			<BurgerControls
				selectedIngredients={ingredients}
				onAdd={handleAddIngredient}
				onRemove={handleRemoveIngredient}
				onCheckout={handleCheckout}
				isDoneBuilding={isDoneBuilding}
			/>
			<BurgerCheckout
				selectedIngredients={ingredients}
				isShow={isChecking}
				onCancelCheckout={handleCancelCheckout}
			/>
		</>
	);
};

export default BurgerBuilder;
