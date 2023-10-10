import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContextProvider';
import { Box, Button } from '@mui/material';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import Hamburger from '../HamburgerMenu/Hamburger';
import { ProductContext } from '../../contexts/ProductsContextProvider';

const Categories = () => {
	const { categories } = useContext(CategoriesContext);
	const { handleSelectedCategoryProducts, selectedCategory } =
		useContext(ProductContext);
	const { isSmallScreen } = useContext(MediaQueryContext);

	const handleFilter = () => {
		
	};

	return (
		<>
			{categories &&
				(isSmallScreen ? (
					<Hamburger />
				) : (
					<Box sx={{ display: 'flex', marginTop: '1rem' }}>
						{categories.map((category) => {
							return (
								<Button
									key={category}
									sx={{
										marginLeft: '0.5rem',
										color:
											selectedCategory === category
												? 'coral'
												: null,
									}}
									onClick={() =>
										handleSelectedCategoryProducts(category)
									}>
									{category.charAt(0).toUpperCase() + category.slice(1)}
								</Button>
							);
						})}
					</Box>
				))}
		</>
	);
};

export default Categories;
