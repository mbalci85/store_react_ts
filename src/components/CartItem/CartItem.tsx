import { Box, CardMedia, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { Product } from '../../interfaces/product';
import DeleteIcon from '@mui/icons-material/Delete';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

interface CartItemProps {
	cartItem: Product;
	handleCartItems: (id: number) => void;
}

const CartItem = ({ cartItem, handleCartItems }: CartItemProps) => {
	// const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);

	const boxGenerator = (width: string, value: number) => {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: width,
					fontSize: '0.75rem',
				}}>
				{value}
			</Box>
		);
	};
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				borderTop: 'solid lightgray 0.1rem',
				marginBottom: '0.75rem',
				paddingTop: '0.75rem',
			}}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'left',
					alignItems: 'center',
					width: '40vw',
				}}>
				<CardMedia
					component='img'
					image={cartItem.image}
					sx={{
						height: '4rem',
						width: '3rem',
						objectFit: 'contain',
						marginRight: '0.8rem',
					}}
				/>
				<Typography sx={{ fontSize: '0.6rem' }}>{cartItem.title}</Typography>
			</Box>
			{boxGenerator('12vw', cartItem.price)}
			{boxGenerator('12vw', 1)}
			<Box sx={{ width: '12vw' }}>
				<IconButton onClick={() => handleCartItems(+cartItem.id)}>
					<DeleteIcon fontSize='small' />
				</IconButton>
			</Box>
			{boxGenerator('12vw', cartItem.price * 1)}
		</Box>
	);
};

export default CartItem;
