import { AppContext } from "@/ContextProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export function NavBar() {
	const { counterInCart } = useContext(AppContext);
	const router = useRouter();

	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/cart">Cart</Link>
				</li>
			</ul>
			<div>
				<button
					onClick={() => {
						router.push("/cart");
					}}
				>
					<a>Cart {counterInCart}</a>
				</button>
			</div>
		</nav>
	);
}
