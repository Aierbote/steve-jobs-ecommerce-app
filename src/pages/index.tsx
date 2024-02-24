import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { use, useContext, useEffect } from "react";
import { AppContext } from "@/ContextProvider";
import { Product, TContext } from "@/declarations";
import { ProductCard } from "@/components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { products } = useContext(AppContext);

	useEffect(() => {}, [products]);
	return (
		<>
			<h1>Home</h1>
			<h2>Our Products</h2>
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
		</>
	);
}
