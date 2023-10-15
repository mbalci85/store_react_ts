import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductsContextProvider';

const HomePage = () => {
	const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
	const { products, setSelectedCategoryProducts, setSelectedCategory } = useContext(ProductContext);
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				minHeight: isSmallScreen ? '84vh' : '80vh',
				backgroundImage:
					'url(https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				paddingTop: '5rem',
			}}>
			<Typography variant={isSmallScreen ? 'body1' : isMediumScreen ? 'h5' : 'h4'}>Welcome to Balci Store!</Typography>
			<Link
				to='/products'
				style={{
					marginTop: '1rem',
					border: '1px solid #ec7979',
					padding: '0.5rem 1rem',
					borderRadius: '0.2rem',
					boxShadow: '0 0 0.1rem 0.2rem rgba(0, 0.1, 0.1, 0.1)',
				}}
				onClick={() => {
					setSelectedCategoryProducts(products);
					setSelectedCategory('All');
				}}>
				See Products
			</Link>
		</Box>
	);
};

export default HomePage;
