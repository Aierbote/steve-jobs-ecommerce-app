import { AppContext } from "@/ContextProvider";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Success() {
	const { paid } = useContext(AppContext);
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

	return <h1>Success</h1>;
}
