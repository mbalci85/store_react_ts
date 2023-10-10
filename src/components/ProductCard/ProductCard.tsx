import { useContext } from 'react';
import { Product } from '../../interfaces/product';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Link } from 'react-router-dom';

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const isVerySmallScreen = useContext(MediaQueryContext);
	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '30rem',
				width: '20rem',
				margin: '2rem 1rem',
				boxShadow: '0.1rem 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2)',
			}}>
			<CardMedia
				component='img'
				image={product.image}
				title={product.title}
				sx={{
					height: '15rem',
					width: '80%',
					margin: '1rem',
					objectFit: 'contain',
					alignSelf: 'center',
					border: '0.05rem solid lightgray',
					padding: '1rem',
					borderRadius: '0.2rem',
					boxShadow: '0.2rem 0 0.2rem 0.2rem rgba(0, 0, 0, 0.3)',
				}}
			/>
			<Link to={`/product-detail/${product.id}`}>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						height: '13rem',
						width: '80%',
						margin: '0 1rem',
					}}>
					<Typography variant='body2'>{product.title}</Typography>
					<Typography variant='inherit' sx={{ color: 'gray' }}>
						{product.category.charAt(0).toUpperCase() +
							product.category.slice(1)}
					</Typography>
					<Typography variant='body2'>£{product.price}</Typography>
				</CardContent>
			</Link>
		</Card>
	);
};

export default ProductCard;
