import { Inter } from "next/font/google";
import { use, useContext, useEffect } from "react";
import { AppContext } from "@/ContextProvider";
import { ProductsList } from "@/components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { products } = useContext(AppContext);

	useEffect(() => {}, [products]);
	return (
		<>
			<h1>Home</h1>
			<h2>Our Products</h2>
			<ProductsList products={products} />
		</>
	);
}
