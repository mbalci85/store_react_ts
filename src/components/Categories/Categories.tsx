import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContextProvider';
import { Box, Button } from '@mui/material';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import Hamburger from '../HamburgerMenu/Hamburger';
import { ProductContext } from '../../contexts/ProductsContextProvider';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

const Categories = () => {
	const { categories } = useContext(CategoriesContext);
	const { handleSelectedCategoryProducts, selectedCategory } = useContext(ProductContext);
	const { isSmallScreen } = useContext(MediaQueryContext);
	const { theme } = useContext(ThemeContext);

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
												? theme === 'Light'
													? 'coral'
													: 'white'
												: null,
									}}
									onClick={() => handleSelectedCategoryProducts(category)}>
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
