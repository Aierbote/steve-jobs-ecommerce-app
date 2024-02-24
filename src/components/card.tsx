import { AppContext } from "@/ContextProvider";
import { Product } from "@/declarations";
import { useContext } from "react";

export function ProductCard({
	qty,
	userId,
	title,
	description,
	id,
	price,
	image,
	thumbnail,
}: Product) {
	const { addToCart } = useContext(AppContext);

	return (
		<div key={id}>
			<img src={thumbnail} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
			<p>
				<b>Price: {price.toFixed(2)}€</b>
			</p>
			<p>
				<b>In stock: {qty}</b>
			</p>
			<button
				onClick={() => {
					console.log("addToCart", id);
					addToCart(id);
				}}
			>
				Add To Cart
			</button>
		</div>
	);
}
