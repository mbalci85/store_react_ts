import axios from 'axios';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { Product } from '../interfaces/product';

type Products = Product[];
type SelectedCategoryProducts = Product[];

interface ProductsContextProviderProps {
	children: ReactNode;
}

interface ProductsContextType {
	products: Products;
	selectedCategoryProducts: Products;
	setProducts: React.Dispatch<React.SetStateAction<Products>>;
	handleSelectedCategoryProducts: (category: string) => void;
	selectedCategory: string;
	setSelectedCategoryProducts: React.Dispatch<
		React.SetStateAction<SelectedCategoryProducts>
	>;
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const ProductContext = createContext<ProductsContextType>({
	setProducts: () => {},
	handleSelectedCategoryProducts: () => {},
	selectedCategoryProducts: [],
	products: [],
	selectedCategory: '',
	setSelectedCategoryProducts: () => {},
	setSelectedCategory: () => {},
});

const ProductsContextProvider = (props: ProductsContextProviderProps) => {
	const allProductsUrl: string = 'https://fakestoreapi.com/products';
	const selectedCategoryProductsUrl: string =
		'https://fakestoreapi.com/products/category';

	const [products, setProducts] = useState<Products>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>('');
	const [selectedCategoryProducts, setSelectedCategoryProducts] =
		useState<SelectedCategoryProducts>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(allProductsUrl);
				setProducts(response.data);
				setSelectedCategoryProducts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, []);

	const handleSelectedCategoryProducts = async (category: string) => {
		if (category === 'All') {
			setSelectedCategoryProducts(products);
			setSelectedCategory('All');
		} else {
			try {
				const response = await axios.get(
					`${selectedCategoryProductsUrl}/${category}`
				);
				setSelectedCategoryProducts(response.data);
				setSelectedCategory(category);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<ProductContext.Provider
			value={{
				setProducts,
				handleSelectedCategoryProducts,
				selectedCategoryProducts,
				selectedCategory,
				products,
				setSelectedCategoryProducts,
				setSelectedCategory,
			}}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductsContextProvider;
