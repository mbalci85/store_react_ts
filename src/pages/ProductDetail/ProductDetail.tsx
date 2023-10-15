import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../../interfaces/product';
import { CartItemContext } from '../../contexts/CartItemContextProvider';
import * as styles from '../../styles/ProductDetailStyles';

const ProductDetail = () => {
	const [product, setProduct] = useState<Product>();

	const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);
	const { cartItemsIds, handleCartItems } = useContext(CartItemContext);
	const { id } = useParams();

	const productUrl = 'https://fakestoreapi.com/products';

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(`${productUrl}/${id}`);
				setProduct(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProduct();
	}, []);

	return (
		<>
			{product && (
				<Box sx={styles.ProductDetailPageStyles(isSmallScreen)}>
					<Card sx={styles.ProductDetailCardStyles(isSmallScreen)}>
						<CardMedia
							component='img'
							image={product.image}
							title={product.title}
							sx={styles.ProductCardMediaStyles(
								isVerySmallScreen,
								isSmallScreen
							)}
						/>
						<CardContent
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								marginLeft: isSmallScreen ? '' : '3.5rem',
							}}>
							<Typography
								sx={styles.ProductCardTitleStyles(
									isVerySmallScreen,
									isSmallScreen
								)}>
								{product.title}
							</Typography>
							<Typography
								sx={styles.ProductCardDetailsStyles(
									isVerySmallScreen,
									isSmallScreen,
									'0.9rem',
									'1rem',
									'1.25rem',
									'gray'
								)}>
								£{product.price}
							</Typography>
							<Typography
								sx={styles.ProductCardDetailsStyles(
									isVerySmallScreen,
									isSmallScreen,
									'1rem',
									'1.2rem',
									'1.35rem',
									'black'
								)}>
								Description
							</Typography>
							<Typography
								sx={styles.ProductCardDetailsStyles(
									isVerySmallScreen,
									isSmallScreen,
									'0.75rem',
									'0.9rem',
									'1rem',
									'black'
								)}>
								{product.description}
							</Typography>
							<Button
								variant='outlined'
								size={isSmallScreen ? 'small' : 'medium'}
								sx={{
									backgroundColor: cartItemsIds.includes(+product.id)
										? 'red'
										: 'coral',
									width: isSmallScreen ? '80%' : '60%',
									marginTop: '1.5rem',
									alignSelf: isSmallScreen ? 'center' : null,
									fontWeight: 'bolder',
									color: 'black',
								}}
								onClick={() => {
									handleCartItems(+product.id);
								}}>
								{cartItemsIds.includes(+product.id)
									? 'Remove from Cart'
									: 'Add to Cart'}
							</Button>
						</CardContent>
					</Card>
				</Box>
			)}
		</>
	);
};

export default ProductDetail;
