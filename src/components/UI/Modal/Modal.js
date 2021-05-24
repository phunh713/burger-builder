import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";
import classes from "./Modal.module.css";

const Modal = (props) => {
	return (
		<Aux>
			<Backdrop onClose={props.onClose}/>
			<div className={classes.Wrapper}>
				<div className={classes.Header}>
					<h4>{props.header}</h4>
                    <span onClick={props.onClose}>Close</span>
				</div>
				{props.children}
			</div>
		</Aux>
	);
};

export default Modal