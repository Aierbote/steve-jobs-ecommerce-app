import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../ContextProvider";
import { NavBar } from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavBar />
			<ContextProvider>
				<Component {...pageProps} />
			</ContextProvider>
		</>
	);
}
