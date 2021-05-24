import React from "react";
import classes from "./BurgerControl.module.css";

const BurgerControl = (props) => {
	return (
		<div className={classes.Control}>
			<div className={classes.Name}>{props.ingredientName}</div>

			<div className={classes.Amount}>
				<button onClick={props.onRemove}> - </button>
				<span>{props.amount}</span>
				<button onClick={props.onAdd}>+</button>
			</div>

			<div className={classes.Price}>{props.price} USD/unit</div>

			<div className={classes.Total}>{(props.price * props.amount).toFixed(2)} USD</div>
		</div>
	);
};

export default BurgerControl;
