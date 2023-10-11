import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../../interfaces/product';

const ProductDetail = () => {
	const [product, setProduct] = useState<Product>();

	const { isVerySmallScreen, isSmallScreen, isMediumScreen } =
		useContext(MediaQueryContext);
	const { id } = useParams();

	const productUrl = 'https://fakestoreapi.com/products';

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(`${productUrl}/${id}`);
				setProduct(response.data);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProduct();
	}, []);

	return (
		<>
			{product && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						minHeight: isVerySmallScreen ? '84vh' : '80vh',
					}}>
					<Card
						sx={{
							display: 'flex',
							flexDirection: isSmallScreen ? 'column' : 'row',
							alignItems: 'center',
							minHeight: '70vh',
							width: isMediumScreen ? '90%' : '80%',
							padding: '1rem',
							margin: '2rem 0',
						}}>
						<CardMedia
							component='img'
							image={product.image}
							title={product.title}
							sx={{
								minHeight: isVerySmallScreen
									? '12rem'
									: isSmallScreen
									? '16rem'
									: '20rem',
								width: isVerySmallScreen
									? '12rem'
									: isSmallScreen
									? '16rem'
									: '20rem',
								objectFit: 'contain',
								margin: '1rem',
								flex: isMediumScreen ? 3 : null,
							}}
						/>
						<CardContent
							sx={{
								height: isSmallScreen ? '50%' : '90%',
								flex: isMediumScreen ? 5 : null,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}>
							<Typography
								sx={{
									marginTop: '0.8rem',
									fontSize: isVerySmallScreen
										? '1rem'
										: isSmallScreen
										? '1.2rem'
										: '1.35rem',
									textAlign: isSmallScreen ? 'center' : null,
								}}>
								{product.title}
							</Typography>
							<Typography
								sx={{
									marginTop: '0.8rem',
									fontSize: isVerySmallScreen
										? '0.9rem'
										: isSmallScreen
										? '1rem'
										: '1.25rem',
									color: 'gray',
								}}>
								£{product.price}
							</Typography>
							<Typography
								sx={{
									marginTop: '0.8rem',
									fontSize: isVerySmallScreen
										? '1rem'
										: isSmallScreen
										? '1.2rem'
										: '1.35rem',
								}}>
								Description
							</Typography>
							<Typography
								sx={{
									marginTop: '0.8rem',
									fontSize: isVerySmallScreen
										? '0.75rem'
										: isSmallScreen
										? '0.9rem'
										: '1rem',
								}}>
								{product.description}
							</Typography>
							<Button
								variant='outlined'
								sx={{
									backgroundColor: 'lightcoral',
									width: '80%',
									marginTop: '1.5rem',
									alignSelf: isSmallScreen ? 'center' : null,
								}}>
								Add to Cart
							</Button>
						</CardContent>
					</Card>
				</Box>
			)}
		</>
	);
};

export default ProductDetail;
