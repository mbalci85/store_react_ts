import { Box, Drawer, IconButton, List, ListItem, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import { ProductContext } from '../../contexts/ProductsContextProvider';
import { CategoriesContext } from '../../contexts/CategoriesContextProvider';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

const Hamburger = () => {
	const { selectedCategory, handleSelectedCategoryProducts } = useContext(ProductContext);
	const { categories } = useContext(CategoriesContext);
	const { theme } = useContext(ThemeContext);
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

	const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

	return (
		<Box>
			<Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer}>
				<List>
					{categories.map((category) => {
						return (
							<ListItem
								key={category}
								onClick={() => handleSelectedCategoryProducts(category)}
								sx={{
									color: selectedCategory === category ? 'coral' : null,
									cursor: 'pointer',
								}}>
								{category.charAt(0).toUpperCase() + category.slice(1)}
							</ListItem>
						);
					})}
				</List>
			</Drawer>
			<Tooltip title='Categories' placement='right-start'>
				<IconButton onClick={toggleDrawer}>
					<MenuIcon sx={{ color: theme === 'Light' ? null : 'white' }} />
					<Typography
						variant='body1'
						sx={{ marginLeft: '0.3rem', color: theme === 'Light' ? null : 'white' }}>
						{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
					</Typography>
				</IconButton>
			</Tooltip>
		</Box>
	);
};

export default Hamburger;
