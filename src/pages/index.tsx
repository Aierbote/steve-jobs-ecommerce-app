import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { use, useContext, useEffect } from "react";
import { AppContext } from "@/ContextProvider";
import { TContext } from "@/declarations";

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
					<div key={id}>
						<img src={thumbnail} alt={title} />
						<h3>{title}</h3>
						<p>{description}</p>
						<p>
							<b>Price: {price}</b>
						</p>
					</div>
				)
			)}
		</>
	);
}
