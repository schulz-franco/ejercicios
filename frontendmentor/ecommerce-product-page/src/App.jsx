import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";

function App() {
	const [cart, setCart] = useState([]);

    return (
		<div id="container">
			<Navbar setCart={setCart} cart={cart} />
			<Product setCart={setCart} />
	    </div>
    );
}

export default App;
