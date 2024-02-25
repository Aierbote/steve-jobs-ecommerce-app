import { AppContext } from "@/ContextProvider";
import Link from "next/link";
import { useContext } from "react";

export function NavBar() {
	const { counterInCart } = useContext(AppContext);

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
				<button>
					<Link href="/cart">Cart {counterInCart}</Link>
				</button>
			</div>
		</nav>
	);
}
