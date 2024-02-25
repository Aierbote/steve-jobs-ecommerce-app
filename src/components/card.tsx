import { AppContext } from "@/ContextProvider";
import { Product } from "@/declarations";
import { useContext } from "react";

const cardStyle = {
	width: "23rem",
	height: "26rem",
	border: "0.0625rem solid #00000029",
	borderRadius: "1rem",

	// &:hover {
	//   boxShadow: "0 0 10px 0 #00000029",
	// }
};

const gridStyle = {
	width: "90vw",
	padding: "0",
	margin: "1rem auto",
	overflow: "hidden",
	display: "grid",
	gridTemplateColumns: "repeat(3, minmax(20rem, 0.8fr))",
	gridColumnGap: "0.5rem",
	rowGap: "1rem",
};

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
		<div key={id} style={cardStyle}>
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

export function ProductsList({ products }: { products: Product[] | null }) {
	return (
		<div style={gridStyle}>
			{!products && <p>Loading Products...</p>}
			{products?.map(
				({ qty, userId, title, description, id, price, image, thumbnail }) => (
					<ProductCard
						key={id}
						qty={qty}
						userId={userId}
						title={title}
						description={description}
						id={id}
						price={price}
						image={image}
						thumbnail={thumbnail}
					/>
				)
			)}
		</div>
	);
}
