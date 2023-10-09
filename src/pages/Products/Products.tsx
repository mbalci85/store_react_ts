import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box } from '@mui/material';
import Categories from '../../components/Categories/Categories';

const Products = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	return (
		<Box sx={{ minHeight: isVerySmallScreen ? '84vh' : '80vh' }}>
			<Categories />
			Products
		</Box>
	);
};

export default Products;
