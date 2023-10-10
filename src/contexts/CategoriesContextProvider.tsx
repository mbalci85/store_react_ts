import axios from 'axios';
import { ReactNode, createContext, useEffect, useState } from 'react';

// Define the type for categories
type Categories = string[];

interface CategoriesContextTypes {
	categories: Categories;
}

interface CategoriesContextProviderProps {
	children: ReactNode;
}

export const CategoriesContext = createContext<CategoriesContextTypes>({
	categories: [],
});

const CategoriesContextProvider = (props: CategoriesContextProviderProps) => {
	const allCategoriesUrl: string = 'https://fakestoreapi.com/products/categories';

	const [categories, setCategories] = useState<Categories>([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(allCategoriesUrl);
				setCategories(['All', ...response.data]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCategories();
	}, []);

	return (
		<CategoriesContext.Provider
			value={{
				categories,
			}}>
			{props.children}
		</CategoriesContext.Provider>
	);
};

export default CategoriesContextProvider;
