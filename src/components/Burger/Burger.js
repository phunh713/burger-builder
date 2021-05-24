import React from "react";
import classes from "./Buger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import burgerIngredientList from "../../components/Burger/BurgerIngredient/IngredientList"

const Burger = (props) => {
    let currentThickness = 0;
	let ingredients = props.ingredients.map((ingredient, index) => {
		const ingr = <BurgerIngredient type={ingredient} key={index} order={index} fromBottom={currentThickness}/>;

        currentThickness += burgerIngredientList.find(ingr => ingr.name === ingredient).thickness

        return ingr
	});
	return (
		<div className={classes.Burger} style={{ height: 250 + props.ingredients.length * 20 + "px" }}>
			{ingredients}
		</div>
	);
};

export default Burger;
