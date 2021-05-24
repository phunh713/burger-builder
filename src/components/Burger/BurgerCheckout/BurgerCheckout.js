import Aux from "../../../hoc/Auxiliary";
import Modal from "../../UI/Modal/Modal";
import defaultIngredientList from "../BurgerIngredient/IngredientList";
import classes from "./BurgerCheckout.module.css";

const BurgerCheckout = (props) => {
	const getUnitPrice = (ingredient) => {
		return defaultIngredientList.find((defaultIngr) => defaultIngr.name === ingredient).price;
	};

	let checkoutArray = [];
	for (const selectIngr of props.selectedIngredients) {
		const index = checkoutArray.findIndex((checkoutIngr) => checkoutIngr.name === selectIngr);
		if (index === -1) {
			checkoutArray.push({ name: selectIngr, amount: 1, unitPrice: getUnitPrice(selectIngr) });
		} else {
			checkoutArray[index].amount++;
		}
	}

	const totalPrice = checkoutArray.reduce(
		(prevTotal, checkoutIngr) => prevTotal + checkoutIngr.amount * checkoutIngr.unitPrice,
		0
	).toFixed(2);

	checkoutArray = checkoutArray
		.filter((checkoutIngr) => checkoutIngr.name !== "Bread Top" && checkoutIngr.name !== "Bread Bottom")
		.map((checkoutIngr) => (
			<div className={classes.Checkout} key={checkoutIngr.name}>
				<span className={classes.Name}>{checkoutIngr.name}</span>
				<span className={classes.Amount}>{checkoutIngr.amount}</span>
				<span className={classes.UnitPrice}>{checkoutIngr.unitPrice}</span>
				<span className={classes.Total}>{checkoutIngr.amount * checkoutIngr.unitPrice}</span>
			</div>
		));

	return (
		<Aux>
			{props.isShow ? (
				<Modal onClose={props.onCancelCheckout} header="Check Out">
					<div className={classes.Checkout}>
						<strong className={classes.Name}>Name</strong>
						<strong className={classes.Amount}>Amount</strong>
						<strong className={classes.UnitPrice}>Unit Price</strong>
						<strong className={classes.Total}>Total</strong>
					</div>
					<div>{checkoutArray}</div>
					<hr></hr>
					<div className={classes.Checkout} style={{ justifyContent: "space-between" }}>
						<strong>Total</strong>
						<span>{totalPrice}</span>
					</div>
				</Modal>
			) : null}
		</Aux>
	);
};

export default BurgerCheckout;
