import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, Typography } from '@mui/material';
import { ProductContext } from '../../contexts/ProductsContextProvider';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

const HomePage = () => {
	const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
	const { products, setSelectedCategoryProducts, setSelectedCategory } = useContext(ProductContext);
	const { theme } = useContext(ThemeContext);
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				minHeight: isSmallScreen ? '84vh' : '80vh',
				backgroundImage:
					theme === 'Light'
						? 'url(https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)'
						: null,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				paddingTop: '5rem',
				color: theme === 'Light' ? null : 'white',
			}}>
			<Typography variant={isSmallScreen ? 'body1' : isMediumScreen ? 'h5' : 'h4'}>
				Welcome to Balci Store!
			</Typography>
			<Typography
				sx={{
					marginTop: '1rem',
					border: theme === 'Light' ? '0.1rem solid #ec7979' : '0.1rem solid white',
					padding: '0.5rem 1.6rem',
					borderRadius: '0.3rem',
					boxShadow: '0 0 0.1rem 0.2rem rgba(0, 0.1, 0.1, 0.1)',
					transition: '0.3s',
					cursor: 'pointer',
					':hover': {
						boxShadow: '0.1rem 0.1rem 0.2rem 0.3rem rgba(0, 0.1, 0.1, 0.2)',
						backgroundColor: 'whitesmoke',
						color: theme === 'Light' ? null : 'black',
					},
				}}
				onClick={() => {
					setSelectedCategoryProducts(products);
					setSelectedCategory('All');
					navigate('/products');
				}}>
				See Products
			</Typography>
		</Box>
	);
};

export default HomePage;
