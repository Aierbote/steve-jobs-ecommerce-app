import { AppContext } from "@/ContextProvider";
import { CartList } from "@/components/card";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useContext } from "react";

export default function Cart() {
	const { counterInCart, total, pay, done } = useContext(AppContext);
	return (
		// TODO : show navbar here too with router
		<>
			<h1>Cart</h1>
			<h3>Total: {total.toFixed(2)}€</h3>
			<button
				disabled={!counterInCart}
				onClick={() => {
					console.log("Proceeding with payment");
					pay();
					done();
				}}
			>
				{!counterInCart && <span>{"Cart is empty"}</span>}
				{counterInCart && <Link href={"/success"}>Proceed With Purchase</Link>}
			</button>
			<CartList />
		</>
	);
}
