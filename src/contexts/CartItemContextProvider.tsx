import { ReactNode, createContext, useEffect, useState } from 'react';

interface CartItemContextProviderProps {
	children: ReactNode;
}

interface CartItemContextTypes {
	cartItemsIds: number[];
	handleCartItems: (id: number) => void;
}

export const CartItemContext = createContext<CartItemContextTypes>({
	cartItemsIds: [],
	handleCartItems: () => {},
});

const CartItemContextProvider = (props: CartItemContextProviderProps) => {
	const [cartItemsIds, setCartItemsIds] = useState<number[]>([]);

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
	return (
		<CartItemContext.Provider value={{ cartItemsIds, handleCartItems }}>
			{props.children}
		</CartItemContext.Provider>
	);
};

export default CartItemContextProvider;
