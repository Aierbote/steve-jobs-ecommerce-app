import React from "react";
import { useRouter } from "next/router";

export function SingleProduct() {
	const router = useRouter();
	const { id } = router.query;
	console.log(id);

	return <div>single-product {id}</div>;
}

export default SingleProduct;
