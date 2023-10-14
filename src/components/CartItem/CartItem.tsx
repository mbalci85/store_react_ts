import { Box, CardMedia, IconButton, Typography } from '@mui/material';

import { Product } from '../../interfaces/product';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

interface CartItemProps {
	cartItem: Product;
	handleCartItems: (id: number) => void;
	setBalance: (amount: number) => void;
	balance: number;
}

const CartItem = ({ cartItem, handleCartItems, setBalance, balance }: CartItemProps) => {
	// const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);

	const [quantity, setQuantity] = useState<number>(1);

	const handleBalance = (qty: number) => {
		const newQuantity = qty;
		const updatedTotal = newQuantity * cartItem.price;
		const updatedBalance = balance - quantity * cartItem.price + updatedTotal;

		setBalance(updatedBalance);
		setQuantity(newQuantity);
	};

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
			<Box sx={{ width: '12vw', textAlign: 'center' }}>
				<input
					type='number'
					min='1'
					style={{ width: '6vw', textAlign: 'center' }}
					value={quantity}
					onChange={(e) => {
						setQuantity(+e.target.value);
						cartItem.quantity = +e.target.value;
						handleBalance(+e.target.value);
					}}
				/>
			</Box>
			{boxGenerator('12vw', +(cartItem.price * quantity).toFixed(2))}
			<Box sx={{ width: '12vw' }}>
				<IconButton
					onClick={() => {
						handleCartItems(+cartItem.id);
						setBalance(balance - cartItem.price * quantity);
					}}>
					<DeleteIcon fontSize='small' />
				</IconButton>
			</Box>
		</Box>
	);
};

export default CartItem;
