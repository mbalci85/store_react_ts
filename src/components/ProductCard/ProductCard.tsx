import { Product } from '../../interfaces/product';
import { Card, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartItemContext } from '../../contexts/CartItemContextProvider';
import * as styles from '../../styles/ProductCardStyles';

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const { cartItemsIds, handleCartItems } = useContext(CartItemContext);
	return (
		<Card sx={styles.ProductCardStyles()}>
			<Tooltip title={cartItemsIds.includes(+product.id) ? 'Remove from Cart' : 'Add to Cart'} placement='top'>
				<IconButton sx={{ position: 'absolute', top: 0, left: 0 }} onClick={() => handleCartItems(+product.id)}>
					{cartItemsIds.includes(+product.id) ? (
						<RemoveCircleOutlineIcon sx={{ color: 'red' }} />
					) : (
						<AddCircleOutlineIcon />
					)}
				</IconButton>
			</Tooltip>
			<CardMedia
				component='img'
				image={product.image}
				title={product.title}
				sx={styles.ProductCardMediaStyles()}
			/>
			<Link to={`/product-detail/${product.id}`}>
				<CardContent sx={styles.ProductCardContentStyles()}>
					<Typography variant='body2'>{product.title}</Typography>
					<Typography variant='inherit' sx={{ color: 'gray' }}>
						{product.category.charAt(0).toUpperCase() + product.category.slice(1)}
					</Typography>
					<Typography variant='body2'>£{product.price}</Typography>
				</CardContent>
			</Link>
		</Card>
	);
};

export default ProductCard;
