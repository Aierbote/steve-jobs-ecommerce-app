import { AppContext } from "@/ContextProvider";
import { CartList } from "@/components/card";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Cart() {
	const { counterInCart, total, pay } = useContext(AppContext);
	const router = useRouter();

	return (
		<>
			<h1>Cart</h1>
			<h3>Total: {total.toFixed(2)}€</h3>
			<button
				disabled={!counterInCart}
				onClick={() => {
					console.log("Proceeding with payment");
					pay();
					router.push("/success");
				}}
			>
				{!counterInCart && <span>Cart is empty</span>}
				{!!counterInCart && "Proceed With Purchase"}
			</button>
			<CartList />
		</>
	);
}
