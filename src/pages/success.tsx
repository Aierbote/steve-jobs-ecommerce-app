import { AppContext } from "@/ContextProvider";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Success() {
	const { paid, cart, done } = useContext(AppContext);
	const router = useRouter();

	if (!paid) {
		setTimeout(() => {
			router.push("/");
		}, 5000);

		return (
			<>
				<h1>Not paid yet</h1>
				<h3>Redirecting you to Homepage</h3>
			</>
		);
	}

	return (
		<>
			<h1>Success</h1>
			<h3>Thank you for your purchase</h3>
			<p>We hope you to get the shipment as soon as possible</p>
			<button
				onClick={() => {
					done();
					router.push("/");
				}}
			>
				<a>Go to Home</a>
			</button>
			<div>
				<table>
					<thead>
						<td>OrderID</td>
						<td>Quantity</td>
					</thead>
					<tbody>
						{cart.map((order) => (
							<tr key={order.id}>
								<td>OrderID {order.id}</td>
								<td>x {order.quantity}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
