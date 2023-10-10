import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box } from '@mui/material';
import Categories from '../../components/Categories/Categories';
import { ProductContext } from '../../contexts/ProductsContextProvider';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	const { selectedCategoryProducts } = useContext(ProductContext);
	return (
		<Box
			sx={{
				minHeight: isVerySmallScreen ? '84vh' : '80vh',
			}}>
			<Categories />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-evenly',
					flexWrap: 'wrap',
				}}>
				{selectedCategoryProducts &&
					selectedCategoryProducts.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})}
			</Box>
		</Box>
	);
};

export default Products;
