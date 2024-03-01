import { ReactNode, createContext, useEffect, useState } from "react";
import { Cart, Product, TContext } from "./declarations";

export const AppContext = createContext<TContext>({
	cart: [],
	paid: false,
	products: null,
	addToCart: () => {},
	removeFromCart: () => {},
	removeTheseFromCart: () => {},
	pay: () => {},
	done: () => {},
	getProductQuantity: () => 0,
	loading: false,
	error: "",
	counterInCart: 0,
	total: 0,
	getProduct: async () => {},
	detailProduct: {} as Product,
});

interface Props {
	children: ReactNode;
}

export function ContextProvider({ children }: Props) {
	const [cart, setCart] = useState<TContext["cart"]>([]);
	const [paid, setPaid] = useState<TContext["paid"]>(false);
	const [products, setProducts] = useState<TContext["products"]>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [counterInCart, setCounterInCart] = useState(0);
	const [total, setTotal] = useState(0);
	const [detailProduct, setDetailProduct] = useState<Product | null>(null);

	const addToCart = (idProduct: Product["id"]) => {
		setCounterInCart(counterInCart + 1);
		const found = cart.find((el) => el.id === idProduct);
		if (!!found) {
			const newCart = cart.map((el) => {
				if (el.id !== idProduct) return el;
				return { id: el.id, quantity: el.quantity + 1 };
			});
			setCart(newCart);
		} else {
			setCart([...cart, { id: idProduct, quantity: 1 }]);
		}

		// NOTE : in case the cart is empty or not, I need to find back the product and its infos.
		const product = products?.find((el) => el.id === idProduct);
		setTotal(total + product!.price);
	};

	const removeFromCart = (idProduct: Product["id"]) => {
		setCounterInCart(counterInCart - 1);
		const newCart = cart.reduce((acc, el) => {
			if (el.id === idProduct) {
				if (el.quantity > 1) {
					acc.push({ id: el.id, quantity: el.quantity - 1 });
					return acc;
				}
				return acc;
			} else {
				acc.push(el);
				return acc;
			}
		}, [] as Cart);
		setCart(newCart);

		// NOTE : I WISH I didn't need to find the product infos AGAIN, I already know its inside the cart.
		const product = products?.find((el) => el.id === idProduct);
		setTotal(total - product!.price);
	};

	const removeTheseFromCart = (idProduct: Product["id"]) => {
		const newCart = cart.filter((el) => {
			if (el.id === idProduct) {
				// NOTE : I WISH I didn't need to find the product infos AGAIN, I already know its inside the cart.
				const product = products?.find((el) => el.id === idProduct);
				setTotal(total - product!.price * el.quantity);
				setCounterInCart(counterInCart - el.quantity);

				return false;
			}
			return true;
		});
		setCart(newCart);
	};

	const pay = () => {
		setPaid(true);
	};

	const getProduct = async (id: number) => {
		try {
			const response = await fetch(
				`https://mockend.up.railway.app/api/products/${id}`
			);
			const data = await response.json();
			setDetailProduct(data);
		} catch (error: any) {
			setError(error.message);
		}
	};

	// const useProduct = (id: number) => {
	// }

	const getProducts = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				"https://mockend.up.railway.app/api/products"
			);
			const data = await response.json();
			setProducts(data);
			setLoading(false);
		} catch (error: any) {
			setError(error.message);
			setLoading(false);
		}
	};

	const done = () => {
		console.log("Completing purchase");
		setPaid(false);
		setCounterInCart(0);
		setTotal(0);
		setCart([]);
	};

	const getProductQuantity = (idProduct: Product["id"]) => {
		return 0;
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<AppContext.Provider
			value={{
				cart,
				paid,
				products,
				addToCart,
				removeFromCart,
				removeTheseFromCart,
				getProductQuantity,
				pay,
				loading,
				error,
				done,
				counterInCart,
				total,
				getProduct,
				detailProduct,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
