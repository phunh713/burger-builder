import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
	return (
		<>
			<Backdrop onClose={props.onClose} />
			<div className={classes.Wrapper}>
				<div className={classes.Header}>
					<h4>{props.header}</h4>
					<span onClick={props.onClose}>Close</span>
				</div>
				{props.children}
			</div>
		</>
	);
};

export default Modal;
