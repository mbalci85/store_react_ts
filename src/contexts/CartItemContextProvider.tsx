import axios from 'axios';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { Product } from '../interfaces/product';

type product = Product;

interface CartItemContextProviderProps {
	children: ReactNode;
}

interface CartItemContextTypes {
	cartItemsIds: number[];
	handleCartItems: (id: number) => void;
	cartItems: product[];
	setCartItemsIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export const CartItemContext = createContext<CartItemContextTypes>({
	cartItemsIds: [],
	handleCartItems: () => {},
	cartItems: [],
	setCartItemsIds: () => {},
});

const CartItemContextProvider = (props: CartItemContextProviderProps) => {
	const [cartItemsIds, setCartItemsIds] = useState<number[]>([]);
	const [cartItems, setCartItems] = useState<product[]>([]);

	const handleCartItems = (id: number) => {
		if (cartItemsIds.includes(id)) {
			const filteredCartItemsIds = cartItemsIds.filter(
				(cartItemId) => cartItemId !== id
			);
			setCartItemsIds(filteredCartItemsIds);
			localStorage.setItem('cart-items-ids', JSON.stringify(filteredCartItemsIds));
		} else {
			const updatedCartItemsIds = [...cartItemsIds, id];

			setCartItemsIds(updatedCartItemsIds);
			localStorage.setItem('cart-items-ids', JSON.stringify(updatedCartItemsIds));
		}
	};

	useEffect(() => {
		const storedCartItemIds = localStorage.getItem('cart-items-ids');
		if (!storedCartItemIds) {
			localStorage.setItem('cart-items-ids', '[]');
		} else if (storedCartItemIds !== null) {
			setCartItemsIds(JSON.parse(storedCartItemIds));
		}
	}, []);

	useEffect(() => {
		const productBaseUrl = 'https://fakestoreapi.com/products';

		Promise.all(
			cartItemsIds.map(async (cartItemId) => {
				try {
					const response = await axios.get(`${productBaseUrl}/${cartItemId}`);
					return response.data;
				} catch (error: any) {
					if (error.response && error.response.status === 404) {
						console.log(error);
					}
				}
			})
		)
			.then((results) => {
				setCartItems(results);
			})
			.catch((error: any) => {
				if (error.response && error.response.status === 404) {
					console.log(error);
				}
			});
	}, [cartItemsIds]);

	return (
		<CartItemContext.Provider
			value={{ cartItemsIds, handleCartItems, cartItems, setCartItemsIds }}>
			{props.children}
		</CartItemContext.Provider>
	);
};

export default CartItemContextProvider;
