import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import BurgerCheckout from "../../components/Burger/BurgerCheckout/BurgerCheckout";
import Aux from "../../hoc/Auxiliary";

class BurgerBuilder extends Component {
	state = {
		ingredients: ["Bread Bottom"],
		isChecking: false,
		isDoneBuilding: false,
	};

	handleAddIngredient = (ingredient) => {
		if (this.state.ingredients.indexOf("Bread Top") === -1) {
			this.setState((state) => ({ ingredients: [...this.state.ingredients, ingredient] }));
		}
		if (ingredient === "Bread Top") {
			console.log(ingredient);
			this.setState({ isDoneBuilding: true });
		}
	};

	handleRemoveIngredient = (ingredient) => {
		if (this.state.ingredients.indexOf("Bread Top") === -1 || ingredient === "Bread Top") {
			let newIngredients = this.state.ingredients;
			const index = newIngredients.lastIndexOf(ingredient);
			if (index !== -1) newIngredients.splice(index, 1);

			this.setState((state) => ({ ingredients: newIngredients }));
		}

		if (ingredient === "Bread Top") {
			console.log(ingredient);
			this.setState({ isDoneBuilding: false });
		}
	};

	handleCheckout = () => {
		this.setState({ isChecking: true });
	};

	handleCancelCheckout = () => {
		console.log("hello");
		this.setState({ isChecking: false });
	};

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BurgerControls
					selectedIngredients={this.state.ingredients}
					onAdd={this.handleAddIngredient}
					onRemove={this.handleRemoveIngredient}
					onCheckout={this.handleCheckout}
					isDoneBuilding={this.state.isDoneBuilding}
				/>
				<BurgerCheckout
					selectedIngredients={this.state.ingredients}
					isShow={this.state.isChecking}
					onCancelCheckout={this.handleCancelCheckout}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
