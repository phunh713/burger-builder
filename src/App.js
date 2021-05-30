import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./components/Burger/BurgerBuilder/BurgerBuilder";

const App = () => {
	return (
		<div>
			<Layout>
				<BurgerBuilder></BurgerBuilder>
			</Layout>
		</div>
	);
};

export default App;
