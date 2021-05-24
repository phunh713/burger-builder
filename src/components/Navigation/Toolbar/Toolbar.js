import classes from "./Toolbar.module.css"
import logo from "../../../assets/images/logo.png"

const Toolbar = (props) => {
	return (
		<div className={classes.Toolbar}>
            <img src={logo} alt="logo" height="40"/>
            <div>...</div>
		</div>
	);
};

export default Toolbar