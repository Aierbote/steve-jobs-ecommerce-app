import { AppContext } from "@/ContextProvider";
import { CartList } from "@/components/card";
import { useContext } from "react";

export default function Cart() {
	const { cart, removeFromCart, total } = useContext(AppContext);
	return (
		// TODO : show navbar here too with router
		<>
			<h1>Cart</h1>
			<CartList />
		</>
	);
}
