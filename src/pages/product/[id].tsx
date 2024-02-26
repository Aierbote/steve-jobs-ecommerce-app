import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AppContext } from "@/ContextProvider";
import { Product } from "@/declarations";
import Image from "next/image";

export function SingleProduct() {
	const router = useRouter();
	const { id } = router.query;

	const { detailProduct, getProduct, cart, addToCart, removeFromCart } =
		useContext(AppContext);

	useEffect(() => {
		getProduct(parseInt(id as string));
	}, [id]);

	if (!detailProduct) {
		return <h1>Loading Detail Product {id}</h1>;
	}

	const { qty, title, description, image, price } = detailProduct;
	const thisProduct = cart.find(
		(product) => product.id === parseInt(id as string)
	);

	return (
		<div>
			<h1>
				{title} productId {id}
			</h1>
			<img src={image} alt={title} />
			<p>{description}</p>
			<div>
				<p>
					<b>Price: {price.toFixed(2)}€</b>
				</p>
				<p>In stock: {qty}</p>
				<p>Ordering: {!!thisProduct ? thisProduct.quantity : 0}</p>
			</div>
			<button
				onClick={() => {
					console.log("add one");
					addToCart(parseInt(id as string));
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					console.log("remove one");
					removeFromCart(parseInt(id as string));
				}}
			>
				-
			</button>
		</div>
	);
}

export default SingleProduct;
